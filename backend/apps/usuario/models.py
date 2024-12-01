from django.db import models
from apps.rol.models import Rol

class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)  # Clave primaria equivalente a SERIAL
    id_rol = models.ForeignKey(Rol, on_delete=models.CASCADE, db_column='id_rol')  # Clave foránea a Rol
    nombre = models.CharField(max_length=100, null=True, blank=True)  # Nombre del usuario
    apellido = models.CharField(max_length=100, null=True, blank=True)  # Apellido del usuario
    correo = models.EmailField(max_length=100, unique=True, null=True, blank=True)  # Correo electrónico
    contraseña = models.CharField(max_length=30, null=True, blank=True)  # Contraseña
    cedula = models.CharField(max_length=20, null=True, blank=True)  # Cédula
    direccion = models.CharField(max_length=200, null=True, blank=True)  # Dirección
    es_monitor = models.BooleanField(default=False, db_column='esmonitor')  # Indica si es monitor
    foto = models.CharField(max_length=100, null=True, blank=True)  # Foto de perfil
    telefono = models.CharField(max_length=50, null=True, blank=True)  # Teléfono
    foto_registro = models.CharField(max_length=100, null=True, blank=True)  # Foto de registro
    codigo = models.CharField(max_length=20, null=True, blank=True)  # Código

    class Meta:
        db_table = "usuario"

    def __str__(self):
        return f"{self.nombre} {self.apellido} ({self.correo})"
