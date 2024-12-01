from rest_framework import generics, status
from rest_framework.response import Response

from .models import ProfesorCurso
from .serializer import ProfesorCursoSerializer

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
    
    
    
    
