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
    def get(self, request, nombreUsuario):  # Capturamos 'nombreUsuario' desde kwargs
        print(f"Parámetro 'nombreUsuario' recibido: {nombreUsuario}")

        try:
            # Intentar obtener el usuario por su nombre de usuario
            usuario = get_object_or_404(Usuario, nombre=nombreUsuario)
            print(f"Usuario obtenido: {usuario}")

            # Filtrar los cursos asignados a este usuario
            cursos_profesor = ProfesorCurso.objects.filter(id_usuario=usuario.id_usuario)
            print(f"Cursos asociados a {usuario.nombre}: {cursos_profesor}")

            # Verificar si no hay cursos asociados
            if not cursos_profesor:
                return Response({"error": "No se encontraron cursos asociados a este usuario."}, status=status.HTTP_404_NOT_FOUND)

            # Formatear los datos de los cursos
            cursos_data = [
                {
                    "id": curso.id_curso.id,
                    "nombre": curso.id_curso.nombre,
                    "seccion": getattr(curso.id_curso, 'seccion', None),
                }
                for curso in cursos_profesor
            ]

            print(f"Datos de los cursos a retornar: {cursos_data}")

            return Response(cursos_data, status=status.HTTP_200_OK)
        except Exception as e:
            print(f"Error en el procesamiento: {str(e)}")
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
