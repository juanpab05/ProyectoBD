# apps/profesorCurso/views.py
from rest_framework import generics, status
from rest_framework.response import Response

from .models import ProfesorCurso
from .serializer import ProfesorCursoSerializer

from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from apps.usuario.models import Usuario

class ListCreateProfesorCurso(generics.ListAPIView):
  queryset = ProfesorCurso.objects.all()
  serializer_class = ProfesorCursoSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = ProfesorCursoSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)

class CursosPorProfesorView(APIView):
    def get(self, request, nombreUsuario):
        try:
            usuario = Usuario.objects.get(nombre=nombreUsuario)
            cursos_profesor = ProfesorCurso.objects.filter(id_usuario=usuario.id_usuario)
            if not cursos_profesor:
                return Response({"error": "No se encontraron cursos asociados a este usuario."}, status=status.HTTP_404_NOT_FOUND)

            cursos_data = [
                {
                    "id": curso.id_curso.id_curso,
                    "nombre": curso.id_curso.nombre_curso,
                    "seccion": getattr(curso.id_curso, 'seccion', None),
                }
                for curso in cursos_profesor
            ]

            return Response(cursos_data, status=status.HTTP_200_OK)
        except Usuario.DoesNotExist:
            return Response({"error": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
