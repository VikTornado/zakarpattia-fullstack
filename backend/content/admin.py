from django.contrib import admin
from django import forms
from django.utils.html import format_html
from adminsortable2.admin import SortableAdminMixin, SortableInlineAdminMixin
from .models import (
    PageContent,
    SummaryPage, AdvantagesPage, InfrastructurePage, TourismPage, InternationalPage, EducationPage,
    IndustryPage, AgriculturePage, MineralsPage, EnergyPage, EconomyMainPage,
    OpportunitiesPage, CatalogPage, TastingHallsPage, ProjectsPage, TaxationPage, ParksPage, RelocatedPage, ITPage,
    Page, PageSection, PageSectionItem  # New models
)

class SinglePageAdmin(admin.ModelAdmin):
    """
    Admin class for pages that have a single fixed slug.
    Filters the queryset to show only that specific page.
    """
    list_display = ('title_uk', 'updated_at')
    exclude = ('slug', 'section', 'chart_data') # Hide slug as it is auto-assigned
    
    class Media:
        css = {
            'all': ('admin/css/ckeditor_fix.css',)
        }
    
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if hasattr(self.model, 'FIXED_SLUG'):
            return qs.filter(slug=self.model.FIXED_SLUG)
        return qs

    def save_model(self, request, obj, form, change):
        if hasattr(self.model, 'FIXED_SLUG'):
            obj.slug = self.model.FIXED_SLUG
            # Auto-assign section based on slug prefix/logic if needed, 
            # or just leave default 'general' as it doesn't matter much for display now
            if 'about-' in self.model.FIXED_SLUG:
                obj.section = 'about'
            elif 'economy-' in self.model.FIXED_SLUG:
                obj.section = 'economy'
            elif 'investment-' in self.model.FIXED_SLUG:
                obj.section = 'investment'
                
        super().save_model(request, obj, form, change)

    def has_add_permission(self, request):
        # Allow adding only if the page doesn't exist yet
        if hasattr(self.model, 'FIXED_SLUG'):
            if self.model.objects.filter(slug=self.model.FIXED_SLUG).exists():
                return False
        return True

# Register the general model (optional, maybe for Superusers only)
@admin.register(PageContent)
class PageContentAdmin(admin.ModelAdmin):
    list_display = ('title_uk', 'slug', 'section', 'updated_at')
    search_fields = ('title_uk', 'title_en', 'content_uk', 'content_en')
    prepopulated_fields = {'slug': ('title_uk',)}

    class Media:
        css = {
            'all': ('admin/css/ckeditor_fix.css',)
        }

# --- About Pages ---
@admin.register(SummaryPage)
class SummaryPageAdmin(SinglePageAdmin): pass

@admin.register(AdvantagesPage)
class AdvantagesPageAdmin(SinglePageAdmin): pass

@admin.register(InfrastructurePage)
class InfrastructurePageAdmin(SinglePageAdmin): pass

@admin.register(TourismPage)
class TourismPageAdmin(SinglePageAdmin): pass

@admin.register(InternationalPage)
class InternationalPageAdmin(SinglePageAdmin): pass

@admin.register(EducationPage)
class EducationPageAdmin(SinglePageAdmin): pass

# --- Economy Pages ---
@admin.register(IndustryPage)
class IndustryPageAdmin(SinglePageAdmin): pass

@admin.register(AgriculturePage)
class AgriculturePageAdmin(SinglePageAdmin): pass

@admin.register(MineralsPage)
class MineralsPageAdmin(SinglePageAdmin): pass

@admin.register(EnergyPage)
class EnergyPageAdmin(SinglePageAdmin): pass

@admin.register(EconomyMainPage)
class EconomyMainPageAdmin(SinglePageAdmin): pass

# --- Investment Pages ---
@admin.register(OpportunitiesPage)
class OpportunitiesPageAdmin(SinglePageAdmin): pass

@admin.register(CatalogPage)
class CatalogPageAdmin(SinglePageAdmin): pass

@admin.register(TastingHallsPage)
class TastingHallsPageAdmin(SinglePageAdmin): pass

@admin.register(ProjectsPage)
class ProjectsPageAdmin(SinglePageAdmin): pass

@admin.register(TaxationPage)
class TaxationPageAdmin(SinglePageAdmin): pass

@admin.register(ParksPage)
class ParksPageAdmin(SinglePageAdmin): pass

@admin.register(RelocatedPage)
class RelocatedPageAdmin(SinglePageAdmin): pass

@admin.register(ITPage)
class ITPageAdmin(SinglePageAdmin): pass


# ===========================================
# NEW DYNAMIC PAGE ADMIN
# ===========================================

class PageSectionItemInline(SortableInlineAdminMixin, admin.TabularInline):
    """Inline for managing items within a section (e.g., cards in a grid)"""
    model = PageSectionItem
    extra = 1
    fields = ('title_uk', 'title_en', 'description_uk', 'description_en', 'image', 'file', 'order', 'file_preview')
    readonly_fields = ('file_preview',)
    
    def file_preview(self, obj):
        if obj.file:
            return format_html('<a href="{}" target="_blank">PDF File</a>', obj.file.url)
        return "No file"
    file_preview.short_description = 'Файл'

class PageSectionInline(SortableInlineAdminMixin, admin.StackedInline):
    """Inline for managing page sections with drag-and-drop ordering"""
    model = PageSection
    extra = 0
    fields = ('section_type', 'title_uk', 'title_en', 'content_uk', 'content_en', 'image', 'video', 'embed_code')
    readonly_fields = ('item_management_hint',)
    
    def item_management_hint(self, obj):
        if obj and obj.section_type == 'grid':
            return format_html(
                '<strong style="color: #d63384;">&rarr; Для додавання PDF-документів/карток перейдіть у меню "Елементи секції"</strong>'
            )
        return "Для типу 'Сітка' додавайте елементи через меню зліва."
    item_management_hint.short_description = 'Порада'


@admin.register(Page)
class PageAdmin(SortableAdminMixin, admin.ModelAdmin):
    """Admin for dynamic pages with sortable ordering"""
    list_display = ('title_uk', 'slug', 'menu_category', 'order', 'section_count', 'is_active', 'show_in_menu', 'updated_at')
    list_editable = ('is_active', 'show_in_menu', 'menu_category')
    list_filter = ('is_active', 'show_in_menu', 'menu_category', 'created_at')
    search_fields = ('title_uk', 'title_en', 'slug')
    prepopulated_fields = {'slug': ('title_uk',)}
    inlines = [PageSectionInline]
    
    fieldsets = (
        ('Основна інформація', {
            'fields': ('slug', 'title_uk', 'title_en')
        }),
        ('Опис', {
            'fields': ('description_uk', 'description_en')
        }),
        ('Налаштування', {
            'fields': ('is_active', 'show_in_menu', 'menu_category', 'order')
        }),
    )

    class Media:
        css = {
            'all': ('admin/css/ckeditor_fix.css',)
        }
    
    def section_count(self, obj):
        """Show number of sections for this page"""
        return obj.sections.count()
    section_count.short_description = 'Секцій'


@admin.register(PageSection)
class PageSectionAdmin(SortableAdminMixin, admin.ModelAdmin):
    """Standalone admin for page sections with nested items"""
    list_display = ('page', 'section_type', 'title_uk', 'order')
    list_filter = ('section_type', 'page')
    search_fields = ('title_uk', 'title_en', 'content_uk')
    inlines = [PageSectionItemInline]

    class Media:
        css = {
            'all': ('admin/css/ckeditor_fix.css',)
        }
@admin.register(PageSectionItem)
class PageSectionItemAdmin(SortableAdminMixin, admin.ModelAdmin):
    """Standalone admin for section items (PDFs, cards)"""
    list_display = ('title_uk', 'get_section_title', 'get_page_title', 'order')
    list_filter = ('section__page', 'section')
    search_fields = ('title_uk', 'title_en')
    
    class Media:
        css = {
            'all': ('admin/css/ckeditor_fix.css',)
        }
    
    def get_section_title(self, obj):
        return obj.section.title_uk or f"Sect #{obj.section.id}"
    get_section_title.short_description = 'Секція'
    
    def get_page_title(self, obj):
        return obj.section.page.title_uk
    get_page_title.short_description = 'Сторінка'
