from rest_framework import generics, status
from rest_framework.response import Response

from .models import EstudianteOpcion
from .serializer import EstudianteOpcionSerializer

class ListCreateEstudianteOpcion(generics.ListAPIView):
  queryset = EstudianteOpcion.objects.all()
  serializer_class = EstudianteOpcionSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = EstudianteOpcionSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
