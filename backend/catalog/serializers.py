from rest_framework import serializers
from .models import CatalogItem, CatalogGalleryImage

class CatalogGalleryImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = CatalogGalleryImage
        fields = ["id", "order", "caption_uk", "caption_en", "image_url"]

    def get_image_url(self, obj):
        return obj.image.url if obj.image else None


class CatalogItemListSerializer(serializers.ModelSerializer):
    cover_image_url = serializers.SerializerMethodField()

    class Meta:
        model = CatalogItem
        fields = [
            "id", "slug", "title_uk", "title_en",
            "short_description_uk", "short_description_en",
            "cover_image_url",
        ]

    def get_cover_image_url(self, obj):
        return obj.cover_image.url if obj.cover_image else None


class CatalogItemDetailSerializer(serializers.ModelSerializer):
    cover_image_url = serializers.SerializerMethodField()
    pdf_url = serializers.SerializerMethodField()
    gallery = CatalogGalleryImageSerializer(many=True, read_only=True)

    class Meta:
        model = CatalogItem
        fields = [
            "id", "slug", "title_uk", "title_en",
            "short_description_uk", "short_description_en",
            "content_uk", "content_en",
            "cover_image_url",
            "pdf_url",
            "gallery",
            "is_active", "created_at",
        ]

    def get_cover_image_url(self, obj):
        return obj.cover_image.url if obj.cover_image else None

    def get_pdf_url(self, obj):
        return obj.pdf_file.url if getattr(obj, "pdf_file", None) else None