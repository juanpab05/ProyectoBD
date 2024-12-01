from rest_framework import generics, status
from rest_framework.response import Response

from .models import Asistencia
from .serializer import AsistenciaSerializer

class ListCreateAsistencia(generics.ListAPIView):
  queryset = Asistencia.objects.all()
  serializer_class = AsistenciaSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = AsistenciaSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
