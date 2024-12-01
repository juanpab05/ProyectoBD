from rest_framework import serializers
from .models import EstudianteOpcion

class EstudianteOpcionSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = EstudianteOpcion
    fields = '__all__'