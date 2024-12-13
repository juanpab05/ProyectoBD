
from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path

from .views import *

urlpatterns = [
  re_path(r'$', ListCreateClase.as_view(), name='create-list-clase'),
  re_path(r'^(?P<nombreUsuario>\w+)/(?P<nombreCurso>\w+)/historial/$', ClasesPorCursoView.as_view(), name='clases-por-curso'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
