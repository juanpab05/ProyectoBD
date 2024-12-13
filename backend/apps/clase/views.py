# apps/clases/views.py
from rest_framework.views import APIView
from .models import Clase, Usuario, Curso  # Asegúrate de importar todos los modelos necesarios

from rest_framework import generics, status
from rest_framework.response import Response

from .serializer import ClaseSerializer

class ListCreateClase(generics.ListAPIView):
  queryset = Clase.objects.all()
  serializer_class = ClaseSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = ClaseSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)

class ClasesPorCursoView(APIView):
    def get(self, request, nombreUsuario, nombreCurso):
        try:
            curso = Curso.objects.get(nombre_curso=nombreCurso)  # Ajusta según tus relaciones entre modelos
            clases = Clase.objects.filter(id_curso=curso.id_curso)
            clases_data = [
                {
                    "id": clase.id_clase,
                    "fecha": clase.fecha_clase,
                }
                for clase in clases
            ]

            return Response(clases_data, status=status.HTTP_200_OK)
        except Usuario.DoesNotExist:
            return Response({"error": "Usuario no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        except Curso.DoesNotExist:
            return Response({"error": "Curso no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
