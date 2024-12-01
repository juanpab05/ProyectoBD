from django.db import models
from apps.pregunta.models import Pregunta

class Opcion(models.Model):
    id_opcion = models.AutoField(primary_key=True)  # Clave primaria equivalente a SERIAL
    id_pregunta = models.ForeignKey(Pregunta, on_delete=models.CASCADE, db_column='id_pregunta')  # Clave foránea a pregunta
    texto_opcion = models.TextField(null=True, blank=True)  # Texto de la opción
    es_correcta = models.BooleanField(default=False, db_column='escorrecta')  # Indica si es la opción correcta

    class Meta:
        db_table = "opcion"

    def __str__(self):
        return f"Opción {self.id_opcion}: {self.texto_opcion}"
