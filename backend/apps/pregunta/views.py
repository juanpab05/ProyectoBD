from rest_framework import generics, status
from rest_framework.response import Response

from .models import Pregunta
from .serializer import PreguntaSerializer

class ListCreatePregunta(generics.ListAPIView):
  queryset = Pregunta.objects.all()
  serializer_class = PreguntaSerializer
  
  def post(self, request, *args, **kwargs):
    data= request.data
    serr = PreguntaSerializer(data=data)
    if (serr.is_valid()):
      serr.save()
      return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
    return Response(status=status.HTTP_400_BAD_REQUEST)
    