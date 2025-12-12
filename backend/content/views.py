from rest_framework import generics
from .models import PageContent
from .serializers import PageContentSerializer
from rest_framework.permissions import AllowAny

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
