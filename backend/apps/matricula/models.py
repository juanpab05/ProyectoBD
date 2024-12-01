from django.db import models
from apps.usuario.models import Usuario
from apps.curso.models import Curso

class Matricula(models.Model):
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)  # Clave foránea a usuario
    id_curso = models.ForeignKey(Curso, on_delete=models.CASCADE)  # Clave foránea a curso

    class Meta:
        db_table = "matricula"
        unique_together = ('id_usuario', 'id_curso')  # Define la clave primaria compuesta

    def __str__(self):
        return f"Usuario {self.id_usuario_id} matriculado en curso {self.id_curso_id}"
