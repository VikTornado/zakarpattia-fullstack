from rest_framework import serializers
from .models import PageContent, Page, PageSection

class PageContentSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = PageContent
        fields = '__all__'
    
    def get_image_url(self, obj):
        """Return absolute URL for image"""
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            # Fallback for when request context is not available
            from django.conf import settings
            return f"{getattr(settings, 'SITE_URL', 'http://localhost:8000')}{obj.image.url}"
        return None


class PageSectionSerializer(serializers.ModelSerializer):
    """Serializer for page sections with media URLs"""
    image_url = serializers.SerializerMethodField()
    video_url = serializers.SerializerMethodField()
    
    class Meta:
        model = PageSection
        fields = ['id', 'section_type', 'title_uk', 'title_en', 'content_uk', 
                  'content_en', 'image_url', 'video_url', 'embed_code', 'order']
    
    def get_image_url(self, obj):
        """Return Cloudinary image URL"""
        if obj.image:
            return obj.image.url
        return None
    
    def get_video_url(self, obj):
        """Return Cloudinary video URL"""
        if obj.video:
            return obj.video.url
        return None


class PageSerializer(serializers.ModelSerializer):
    """Serializer for dynamic pages with nested sections"""
    sections = PageSectionSerializer(many=True, read_only=True)
    
    class Meta:
        model = Page
        fields = ['id', 'slug', 'title_uk', 'title_en', 'description_uk', 
                  'description_en', 'is_active', 'show_in_menu', 'order', 
                  'sections', 'created_at', 'updated_at']


class PageListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for page list (without sections)"""
    section_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Page
        fields = ['id', 'slug', 'title_uk', 'title_en', 'description_uk', 
                  'description_en', 'is_active', 'show_in_menu', 'order', 
                  'section_count']
    
    def get_section_count(self, obj):
        return obj.sections.count()
