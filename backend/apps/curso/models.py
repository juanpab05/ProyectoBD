from django.db import models

class Curso(models.Model):
    id_curso = models.AutoField(primary_key=True)  # Clave primaria equivalente a SERIAL
    qr_curso = models.CharField(max_length=15, null=True, blank=True)  # Código QR del curso, opcional
    nombre_curso = models.CharField(max_length=100)  # Nombre del curso, requerido

    class Meta:
        db_table = "curso"

    def __str__(self):
        return self.nombre_curso
