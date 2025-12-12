from rest_framework import generics
from .models import PageContent, Page
from .serializers import PageContentSerializer, PageSerializer, PageListSerializer
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
