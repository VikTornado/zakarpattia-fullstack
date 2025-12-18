from django.urls import path
from .views import CatalogItemListAPIView, CatalogItemDetailAPIView

urlpatterns = [
    path("catalog-items/", CatalogItemListAPIView.as_view(), name="catalog-items-list"),
    path("catalog-items/<slug:slug>/", CatalogItemDetailAPIView.as_view(), name="catalog-items-detail"),
]