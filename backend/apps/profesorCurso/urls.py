
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CursosPorProfesorView, ListCreateProfesorCurso
from django.urls import re_path

from .views import *

urlpatterns = [
  re_path(r'^(?P<nombreUsuario>\w+)/$', CursosPorProfesorView.as_view(), name='cursos-por-profesor'),
  re_path(r'$', ListCreateProfesorCurso.as_view(), name='create-list-profesorCurso'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
