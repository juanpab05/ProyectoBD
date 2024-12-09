# from rest_framework import generics, status
# from rest_framework.response import Response

# from .models import Usuario
# from .serializer import UsuarioSerializer

# class ListCreateUsuario(generics.ListAPIView):
#   queryset = Usuario.objects.all()
#   serializer_class = UsuarioSerializer
  
#   def post(self, request, *args, **kwargs):
#     data= request.data
#     serr = UsuarioSerializer(data=data)
#     if (serr.is_valid()):
#       serr.save()
#       return Response(serr.validated_data, status=status.HTTP_200_OK)  
    
#     return Response(status=status.HTTP_400_BAD_REQUEST)
    
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Usuario
from .serializer import UsuarioSerializer

class ListCreateUsuario(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serr = UsuarioSerializer(data=data)
        if serr.is_valid():
            serr.save()  # Guardar el nuevo Usuario en la base de datos
            return Response(serr.data, status=status.HTTP_201_CREATED)  # Retorna los datos creados con código 201
        
        return Response(serr.errors, status=status.HTTP_400_BAD_REQUEST)  # Retorna los errores de validación con código 400
