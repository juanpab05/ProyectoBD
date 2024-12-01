from django.db import models

class Rol(models.Model):
    id_rol = models.AutoField(primary_key=True)  # Clave primaria equivalente a SERIAL
    nombre_rol = models.CharField(max_length=50)  # Nombre del rol

    class Meta:
        db_table = "rol"

    def __str__(self):
        return self.nombre_rol
