from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('places/cargar-municipios/', views.cargar_municipios, name='cargar_municipios'),
]

