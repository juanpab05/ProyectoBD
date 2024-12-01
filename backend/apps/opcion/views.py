from rest_framework import generics, status
from rest_framework.response import Response

from .models import Opcion
from .serializer import OpcionSerializer

class ListCreateOpcion(generics.ListAPIView):
  queryset = Opcion.objects.all()
  serializer_class = OpcionSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = OpcionSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
