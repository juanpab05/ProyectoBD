from django.db import models
from apps.curso.models import Curso
from apps.usuario.models import Usuario

class ProfesorCurso(models.Model):
    id_curso = models.ForeignKey(Curso, on_delete=models.CASCADE, db_column='id_curso')  # Clave foránea a curso
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, db_column='id_usuario')  # Clave foránea a usuario

    class Meta:
        db_table = "profesorCurso"
        unique_together = ('id_curso', 'id_usuario')  # Define la clave primaria compuesta

    def __str__(self):
        return f"Usuario {self.id_usuario} asignado al curso {self.id_curso}"
