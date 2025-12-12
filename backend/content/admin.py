from django.contrib import admin
from django import forms
from django.utils.html import format_html
from adminsortable2.admin import SortableAdminMixin, SortableInlineAdminMixin
from .models import (
    PageContent,
    SummaryPage, AdvantagesPage, InfrastructurePage, TourismPage, InternationalPage, EducationPage,
    IndustryPage, AgriculturePage, MineralsPage, EnergyPage, EconomyMainPage,
    OpportunitiesPage, CatalogPage, TastingHallsPage, ProjectsPage, TaxationPage, ParksPage, RelocatedPage, ITPage,
    Page, PageSection  # New models
)

class SinglePageAdmin(admin.ModelAdmin):
    """
    Admin class for pages that have a single fixed slug.
    Filters the queryset to show only that specific page.
    """
    list_display = ('title_uk', 'updated_at')
    exclude = ('slug', 'section', 'chart_data') # Hide slug as it is auto-assigned
    
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
    search_fields = ('title_uk', 'slug')
    list_filter = ('section',)

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

class PageSectionInline(SortableInlineAdminMixin, admin.TabularInline):
    """Inline for managing page sections with drag-and-drop ordering"""
    model = PageSection
    extra = 1
    fields = ('section_type', 'title_uk', 'title_en', 'content_uk', 'content_en', 'image', 'video', 'embed_code', 'media_preview')
    readonly_fields = ('media_preview',)
    
    def media_preview(self, obj):
        """Show preview of image/video"""
        if obj.image:
            return format_html(
                '<img src="{}" style="max-width:200px; max-height:100px;" />',
                obj.image.url
            )
        elif obj.video:
            return format_html(
                '<video width="200" controls><source src="{}" type="video/mp4"></video>',
                obj.video.url
            )
        return "Немає медіа"
    media_preview.short_description = 'Попередній перегляд'


@admin.register(Page)
class PageAdmin(SortableAdminMixin, admin.ModelAdmin):
    """Admin for dynamic pages with sortable ordering"""
    list_display = ('title_uk', 'slug', 'order', 'section_count', 'is_active', 'show_in_menu', 'updated_at')
    list_editable = ('is_active', 'show_in_menu')
    list_filter = ('is_active', 'show_in_menu', 'created_at')
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
            'fields': ('is_active', 'show_in_menu', 'order')
        }),
    )
    
    def section_count(self, obj):
        """Show number of sections for this page"""
        return obj.sections.count()
    section_count.short_description = 'Секцій'


@admin.register(PageSection)
class PageSectionAdmin(admin.ModelAdmin):
    """Standalone admin for page sections (mostly for reference)"""
    list_display = ('page', 'section_type', 'title_uk', 'order')
    list_filter = ('section_type', 'page')
    search_fields = ('title_uk', 'title_en', 'content_uk')
