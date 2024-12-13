
from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path

from .views import *

urlpatterns = [
  re_path(r'$', ListCreateUsuario.as_view(), name='create-list-usuario'),
  re_path(r'^api/login/$', LoginView.as_view(), name='login'), # Ajustamos el patrón de ruta 
]

urlpatterns = format_suffix_patterns(urlpatterns)
