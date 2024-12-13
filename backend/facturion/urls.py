
from django.contrib import admin
from django.urls import include, re_path

urlpatterns = [
    re_path(r'^admin/', admin.site.urls),
    re_path(r'^asistencia/', include('apps.asistencia.urls')),
    re_path(r'^clase/',include ('apps.clase.urls')),
    re_path(r'^curso/',include ('apps.curso.urls')),
    re_path(r'^estudianteopcion/',include ('apps.EstudianteOpcion.urls')),
    re_path(r'^matricula/',include ('apps.matricula.urls')),
    re_path(r'^opcion/',include ('apps.opcion.urls')),
    re_path(r'^pregunta/',include ('apps.pregunta.urls')),
    re_path(r'^profesorcurso/',include ('apps.profesorCurso.urls')),
    re_path(r'^rol/',include ('apps.rol.urls')),
    re_path(r'^usuario/',include ('apps.usuario.urls'))
]
