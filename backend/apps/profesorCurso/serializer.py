from rest_framework import serializers
from .models import ProfesorCurso

class ProfesorCursoSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = ProfesorCurso
    fields = '__all__'