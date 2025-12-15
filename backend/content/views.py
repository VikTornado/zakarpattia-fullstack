from rest_framework import generics
from .models import PageContent, Page
from .serializers import PageContentSerializer, PageSerializer, PageListSerializer
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from rest_framework.throttling import AnonRateThrottle

class PageContentListView(generics.ListAPIView):
    """
    List all page content or filter by section.
    Query params: ?section=economy|about|investment
    """
    serializer_class = PageContentSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        queryset = PageContent.objects.all()
        section = self.request.query_params.get('section', None)
        if section:
            queryset = queryset.filter(section=section)
        return queryset.order_by('slug')
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

class PageContentView(generics.RetrieveAPIView):
    """
    Retrieve specific page content by slug.
    """
    queryset = PageContent.objects.all()
    serializer_class = PageContentSerializer
    lookup_field = 'slug'
    permission_classes = [AllowAny]
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context


# ===========================================
# NEW DYNAMIC PAGE API VIEWS
# ===========================================

class PageListView(generics.ListAPIView):
    """
    List all active dynamic pages.
    Returns lightweight list without sections.
    """
    serializer_class = PageListSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        # Only return active pages, ordered by order field
        queryset = Page.objects.filter(is_active=True)
        
        # Optional filter for menu pages only
        menu_only = self.request.query_params.get('menu', None)
        if menu_only:
            queryset = queryset.filter(show_in_menu=True)
        
        return queryset.order_by('order', 'title_uk')


class PageDetailView(generics.RetrieveAPIView):
    """
    Retrieve specific dynamic page by slug with all sections.
    """
    queryset = Page.objects.filter(is_active=True)
    serializer_class = PageSerializer
    lookup_field = 'slug'
    permission_classes = [AllowAny]


class ContactAPIView(APIView):
    """Simple contact endpoint to forward messages to configured recipients."""
    permission_classes = [AllowAny]
    throttle_classes = [AnonRateThrottle]

    def post(self, request, *args, **kwargs):
        name = request.data.get('name', '').strip()
        email = request.data.get('email', '').strip()
        message = request.data.get('message', '').strip()

        if not name or not email or not message:
            return Response({'detail': 'name, email and message are required'}, status=status.HTTP_400_BAD_REQUEST)

        subject = f"Contact form message from {name} <{email}>"
        body = f"From: {name} <{email}>\n\n{message}"

        recipients = getattr(settings, 'CONTACT_RECIPIENTS', [])
        if not recipients:
            # fallback to site admins if CONTACT_RECIPIENTS not configured
            recipients = [admin[1] for admin in getattr(settings, 'ADMINS', [])]

        if not recipients:
            return Response({'detail': 'No contact recipients configured'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        try:
            send_mail(subject, body, getattr(settings, 'DEFAULT_FROM_EMAIL', 'no-reply@localhost'), recipients, fail_silently=False)
        except BadHeaderError:
            return Response({'detail': 'Invalid header found.'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': 'Failed to send message.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({'detail': 'Message sent successfully.'}, status=status.HTTP_200_OK)
