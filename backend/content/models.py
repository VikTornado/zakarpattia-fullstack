from django.db import models
from django_ckeditor_5.fields import CKEditor5Field

class PageContent(models.Model):
    slug = models.SlugField(unique=True, help_text="Unique identifier for the page")
    
    title_uk = models.CharField(max_length=200, verbose_name="Title (Ukrainian)")
    title_en = models.CharField(max_length=200, verbose_name="Title (English)")
    
    content_uk = CKEditor5Field(verbose_name="Content (Ukrainian)", blank=True, config_name="default")
    content_en = CKEditor5Field(verbose_name="Content (English)", blank=True, config_name="default")
    
    image = models.ImageField(upload_to='page_images/', blank=True, null=True)
    
    SECTION_CHOICES = [
        ('general', 'General'),
        ('about', 'About Region'),
        ('economy', 'Economy'),
        ('investment', 'Investment'),
    ]
    section = models.CharField(max_length=20, choices=SECTION_CHOICES, default='general', verbose_name="Section")

    chart_data = models.JSONField(blank=True, null=True, help_text='''
    Example:
    {
      "columns": ["Source", "Potential", "Installed"],
      "rows": [
        {"label": "Solar", "values": [100, 20]},
        {"label": "Wind", "values": [200, 50]}
      ]
    }
    ''')

    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title_uk}"

# --- About Pages ---
class SummaryPage(PageContent):
    FIXED_SLUG = 'about-summary'
    class Meta:
        proxy = True
        verbose_name = "1. Огляд"
        verbose_name_plural = "1. Огляд"

class AdvantagesPage(PageContent):
    FIXED_SLUG = 'about-advantages'
    class Meta:
        proxy = True
        verbose_name = "2. Переваги"
        verbose_name_plural = "2. Переваги"

class InfrastructurePage(PageContent):
    FIXED_SLUG = 'about-infrastructure'
    class Meta:
        proxy = True
        verbose_name = "3. Інфраструктура"
        verbose_name_plural = "3. Інфраструктура"

class TourismPage(PageContent):
    FIXED_SLUG = 'about-tourism'
    class Meta:
        proxy = True
        verbose_name = "4. Туризм"
        verbose_name_plural = "4. Туризм"

class InternationalPage(PageContent):
    FIXED_SLUG = 'about-international'
    class Meta:
        proxy = True
        verbose_name = "5. Міжнародна співпраця"
        verbose_name_plural = "5. Міжнародна співпраця"

class EducationPage(PageContent):
    FIXED_SLUG = 'about-education'
    class Meta:
        proxy = True
        verbose_name = "6. Освіта"
        verbose_name_plural = "6. Освіта"



# --- Economy Pages ---
class IndustryPage(PageContent):
    FIXED_SLUG = 'economy-industry'
    class Meta:
        proxy = True
        verbose_name = "1. Промисловість"
        verbose_name_plural = "1. Промисловість"

class AgriculturePage(PageContent):
    FIXED_SLUG = 'economy-agriculture'
    class Meta:
        proxy = True
        verbose_name = "2. Сільське господарство"
        verbose_name_plural = "2. Сільське господарство"

class MineralsPage(PageContent):
    FIXED_SLUG = 'economy-minerals'
    class Meta:
        proxy = True
        verbose_name = "3. Корисні копалини"
        verbose_name_plural = "3. Корисні копалини"

class EnergyPage(PageContent):
    FIXED_SLUG = 'economy-energy'
    class Meta:
        proxy = True
        verbose_name = "4. Енергетика"
        verbose_name_plural = "4. Енергетика"


# --- Investment Pages ---
class OpportunitiesPage(PageContent):
    FIXED_SLUG = 'investment-opportunities'
    class Meta:
        proxy = True
        verbose_name = "1. Можливості"
        verbose_name_plural = "1. Можливості"

class CatalogPage(PageContent):
    FIXED_SLUG = 'investment-catalog'
    class Meta:
        proxy = True
        verbose_name = "2. Каталог"
        verbose_name_plural = "2. Каталог"

class TastingHallsPage(PageContent):
    FIXED_SLUG = 'investment-tasting-halls'
    class Meta:
        proxy = True
        verbose_name = "3. Дегустаційні зали"
        verbose_name_plural = "3. Дегустаційні зали"

class ProjectsPage(PageContent):
    FIXED_SLUG = 'investment-projects'
    class Meta:
        proxy = True
        verbose_name = "4. Проєкти"
        verbose_name_plural = "4. Проєкти"

class TaxationPage(PageContent):
    FIXED_SLUG = 'investment-taxation'
    class Meta:
        proxy = True
        verbose_name = "5. Оподаткування"
        verbose_name_plural = "5. Оподаткування"

class ParksPage(PageContent):
    FIXED_SLUG = 'investment-parks'
    class Meta:
        proxy = True
        verbose_name = "6. Індустріальні парки"
        verbose_name_plural = "6. Індустріальні парки"

class RelocatedPage(PageContent):
    FIXED_SLUG = 'investment-relocated'
    class Meta:
        proxy = True
        verbose_name = "7. Релоковані підприємства"
        verbose_name_plural = "7. Релоковані підприємства"

class ITPage(PageContent):
    FIXED_SLUG = 'investment-it'
    class Meta:
        proxy = True
        verbose_name = "8. IT-сектор"
        verbose_name_plural = "8. IT-сектор"


class EconomyMainPage(PageContent):
    FIXED_SLUG = 'economy-main'
    class Meta:
        proxy = True
        verbose_name = "Економіка (Головна)"
        verbose_name_plural = "Економіка (Головна)"


# ===========================================
# NEW DYNAMIC PAGE SYSTEM
# ===========================================

class Page(models.Model):
    """Dynamic page that can be created from admin"""
    slug = models.SlugField(unique=True, max_length=100, help_text="URL-friendly identifier")
    
    title_uk = models.CharField(max_length=200, verbose_name="Назва (українською)")
    title_en = models.CharField(max_length=200, verbose_name="Title (English)")
    
    description_uk = models.TextField(blank=True, verbose_name="Опис (українською)")
    description_en = models.TextField(blank=True, verbose_name="Description (English)")
    
    is_active = models.BooleanField(default=True, verbose_name="Активна")
    show_in_menu = models.BooleanField(default=True, verbose_name="Показувати в меню")
    
    order = models.PositiveIntegerField(default=0, db_index=True, verbose_name="Порядок")
    
    MENU_CATEGORY_CHOICES = [
        ('none', 'Не в меню'),
        ('about', 'Про регіон'),
        ('economy', 'Економіка'),
        ('investment', 'Інвестиції'),
    ]
    menu_category = models.CharField(
        max_length=20, 
        choices=MENU_CATEGORY_CHOICES, 
        default='none', 
        verbose_name="Категорія меню"
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order', 'title_uk']
        verbose_name = "Сторінка"
        verbose_name_plural = "Динамічні сторінки"
    
    def __str__(self):
        return self.title_uk

    def get_absolute_url(self):
        return f"/pages/{self.slug}"


class PageSection(models.Model):
    """Content section within a page"""
    SECTION_TYPE_CHOICES = [
        ('hero', 'Hero (Full-screen Video/Image)'),
        ('text', 'Текстовий контент'),
        ('image', 'Зображення'),
        ('video', 'Відео'),
        ('gallery', 'Галерея зображень'),
        ('chart', 'Графік / Діаграма'),
        ('stats', 'Статистика / KPI'),
        ('embed', 'Вбудований контент'),
        ('custom', 'Raw HTML / Custom'),
    ]
    
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='sections', verbose_name="Сторінка")
    section_type = models.CharField(max_length=20, choices=SECTION_TYPE_CHOICES, default='text', verbose_name="Тип секції")
    
    title_uk = models.CharField(max_length=200, blank=True, verbose_name="Заголовок (українською)")
    title_en = models.CharField(max_length=200, blank=True, verbose_name="Title (English)")
    
    content_uk = CKEditor5Field(blank=True, verbose_name="Контент (українською)", config_name="default")
    content_en = CKEditor5Field(blank=True, verbose_name="Content (English)", config_name="default")
    
    # Media fields
    # Media fields
    image = models.ImageField(upload_to='section_images/', blank=True, null=True, verbose_name="Зображення")
    video = models.FileField(upload_to='section_videos/', blank=True, null=True, verbose_name="Відео")
    
    # For embeds (YouTube, maps, etc.)
    embed_code = models.TextField(blank=True, verbose_name="Код вбудовування")
    
    # Chart or structured data
    chart_data = models.JSONField(blank=True, null=True, verbose_name="Дані графіку (JSON)", help_text="Example: {'labels': ['Jan', 'Feb'], 'datasets': [{'label': 'Potential', 'data': [10, 20]}]}")
    
    order = models.PositiveIntegerField(default=0, db_index=True, verbose_name="Порядок")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order']
        verbose_name = "Секція сторінки"
        verbose_name_plural = "Секції сторінки"
    
    def __str__(self):
        return f"{self.page.title_uk} - {self.get_section_type_display()} #{self.order}"
