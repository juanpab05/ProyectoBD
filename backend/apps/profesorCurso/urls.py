
from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import re_path

from .views import *

urlpatterns = [
  re_path(r'$', ListCreateProfesorCurso.as_view(), name='create-list-profesorCurso'),
  re_path(r'profesorcurso/(?P<nombreUsuario>\w+)/$', CursosPorProfesorView.as_view(), name='cursos-por-profesor'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
