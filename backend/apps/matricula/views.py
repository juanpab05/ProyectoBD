from rest_framework import generics, status
from rest_framework.response import Response

from .models import Matricula
from .serializer import MatriculaSerializer

class ListCreateMatricula(generics.ListAPIView):
  queryset = Matricula.objects.all()
  serializer_class = MatriculaSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = MatriculaSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
