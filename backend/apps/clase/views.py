from rest_framework import generics, status
from rest_framework.response import Response

from .models import Clase
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
  
  
    
    
    
    
