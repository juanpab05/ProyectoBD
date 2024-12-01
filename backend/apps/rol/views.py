from rest_framework import generics, status
from rest_framework.response import Response

from .models import Rol
from .serializer import RolSerializer

class ListCreateRol(generics.ListAPIView):
  queryset = Rol.objects.all()
  serializer_class = RolSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = RolSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
