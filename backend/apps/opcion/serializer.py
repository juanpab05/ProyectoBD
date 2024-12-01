from rest_framework import serializers
from .models import Opcion

class OpcionSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Opcion
    fields = '__all__'