from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import CatalogItem
from .serializers import (
    CatalogItemListSerializer,
    CatalogItemDetailSerializer,
)

class CatalogItemListAPIView(ListAPIView):
    queryset = CatalogItem.objects.filter(is_active=True)
    serializer_class = CatalogItemListSerializer


class CatalogItemDetailAPIView(RetrieveAPIView):
    queryset = CatalogItem.objects.filter(is_active=True)
    serializer_class = CatalogItemDetailSerializer
    lookup_field = "slug"