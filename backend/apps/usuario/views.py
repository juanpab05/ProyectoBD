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
from apps.clase.models import Clase
from apps.clase.serializer import ClaseSerializer


# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.views import APIView

# views.py
from rest_framework.views import APIView

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

class LoginView(APIView):
    @csrf_exempt
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        correo = data.get('correo')
        contraseña = data.get('contraseña')
        
        try:
            usuario = Usuario.objects.get(correo=correo)
            if usuario.contraseña == contraseña:
                return Response({'message': 'Login successful', 'username': usuario.nombre}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        except Usuario.DoesNotExist:
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class ClasesUsuarioView(APIView):
    def get(self, request, username, *args, **kwargs):
        try:
            usuario = Usuario.objects.get(nombre=username)
            clases = Clase.objects.filter(usuarios__id_usuario=usuario.id_usuario)
            serializer = ClaseSerializer(clases, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Usuario.DoesNotExist:
            return Response({'message': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


#postman 