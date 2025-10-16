from django.urls import path
from . import views  # Importamos las vistas de esta app

urlpatterns = [
    path('', views.index, name='index'),
]

