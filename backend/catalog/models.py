from django.db import models

class CatalogItem(models.Model):
    slug = models.SlugField(unique=True)
    title_uk = models.CharField(max_length=255)
    title_en = models.CharField(max_length=255, blank=True, default="")
    short_description_uk = models.TextField(blank=True, default="")
    short_description_en = models.TextField(blank=True, default="")
    content_uk = models.TextField(blank=True, default="")
    content_en = models.TextField(blank=True, default="")

    cover_image = models.ImageField(upload_to="catalog/covers/", blank=True, null=True)
    pdf_file = models.FileField(upload_to="catalog/pdfs/", blank=True, null=True)
    # Додамо PDF у пункті 2
    # category додамо у пункті 3

    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title_uk


class CatalogGalleryImage(models.Model):
    item = models.ForeignKey(
        CatalogItem,
        related_name="gallery",
        on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to="catalog/gallery/")
    caption_uk = models.CharField(max_length=255, blank=True, default="")
    caption_en = models.CharField(max_length=255, blank=True, default="")
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return f"{self.item.slug} #{self.id}"