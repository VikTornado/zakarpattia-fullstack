from rest_framework import serializers
from .models import PageContent

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
            return f"http://localhost:8000{obj.image.url}"
        return None
