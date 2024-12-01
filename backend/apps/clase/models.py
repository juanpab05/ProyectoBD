from django.db import models
from apps.curso.models import Curso
from apps.usuario.models import Usuario

class Clase(models.Model):
    id_clase = models.AutoField(primary_key=True)  # Clave primaria equivalente a SERIAL
    id_curso = models.ForeignKey(Curso, on_delete=models.CASCADE, db_column='id_curso')  # Clave foránea a curso
    fecha_clase = models.DateField(null=True, blank=True)  # Fecha de la clase
    hora_clase = models.TimeField(null=True, blank=True)  # Hora de la clase
    qr_asistencia = models.CharField(max_length=200, null=True, blank=True)  # Código QR para asistencia
    material_clase = models.CharField(max_length=200, null=True, blank=True, db_column='materialclase')  # Material de la clase

    # Relación ManyToMany con tabla intermedia personalizada
    usuarios = models.ManyToManyField(
        Usuario,               # Modelo relacionado
        through='asistencia.Asistencia',  # Nombre de la tabla intermedia
        related_name='clases'  # Nombre para el reverso de la relación
    )

    class Meta:
        db_table = "clase"

    def __str__(self):
        return f"Clase {self.id_clase} del curso {self.id_curso_id}"
