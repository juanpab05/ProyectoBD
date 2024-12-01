from django.db import models
from apps.clase.models import Clase

class Pregunta(models.Model):
    id_pregunta = models.AutoField(primary_key=True)  # Clave primaria equivalente a SERIAL
    id_clase = models.ForeignKey(Clase, on_delete=models.CASCADE, db_column='id_clase')  # Clave foránea a clase
    qr_pregunta = models.CharField(max_length=200, null=True, blank=True)  # Código QR de la pregunta
    texto_pregunta = models.TextField()  # Texto de la pregunta
    class Meta:
        db_table = "pregunta"

    def __str__(self):
        return f"Pregunta {self.id_pregunta}: {self.texto_pregunta}"
