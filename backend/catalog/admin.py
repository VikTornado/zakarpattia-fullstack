from django.contrib import admin
from .models import CatalogItem, CatalogGalleryImage


class CatalogGalleryImageInline(admin.TabularInline):
    model = CatalogGalleryImage
    extra = 1


@admin.register(CatalogItem)
class CatalogItemAdmin(admin.ModelAdmin):
    list_display = ("id", "slug", "title_uk", "is_active")
    prepopulated_fields = {"slug": ("title_uk",)}
    inlines = [CatalogGalleryImageInline]