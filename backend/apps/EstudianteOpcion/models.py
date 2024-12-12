from django.db import models
from apps.usuario.models import Usuario
from apps.opcion.models import Opcion

class EstudianteOpcion(models.Model):
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, db_column='id_usuario',primary_key=True)  # Clave foránea a usuario
    id_opcion = models.ForeignKey(Opcion, on_delete=models.CASCADE, db_column= 'id_opcion')  # Clave foránea a opción

    class Meta:
        db_table = "estudianteopcion"
        unique_together = (('id_usuario', 'id_opcion'),)  # Define la clave primaria compuesta

    def __str__(self):
        return f"Usuario {self.id_usuario_id} asociado a opción {self.id_opcion_id}"
