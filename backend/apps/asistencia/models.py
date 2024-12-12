from django.db import models
from apps.usuario.models import Usuario
from apps.clase.models import Clase

# ORM

class Asistencia(models.Model):
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, db_column='id_usuario', primary_key=True )
    id_clase = models.ForeignKey(Clase, on_delete=models.CASCADE, db_column='id_clase')
    longitud = models.FloatField(null=True, blank=True)
    latitud = models.FloatField(null=True, blank=True)

    class Meta:
        db_table = 'asistencia'
        unique_together = (('id_usuario', 'id_clase'),)

    def __str__(self):
        return f"Asistencia de usuario {self.id_usuario} a clase {self.id_clase}"
