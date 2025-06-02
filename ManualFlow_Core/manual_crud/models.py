from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import FileExtensionValidator

class ProgramType(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Program(models.Model):
    name = models.CharField(max_length=255, unique=True)
    logo = models.FileField(upload_to='program_logos/', validators=[FileExtensionValidator(['svg'])], blank=False, null=False)
    creation_year = models.IntegerField()
    description = models.TextField()
    manual_win = models.TextField(blank=True, null=True)  
    manual_mac = models.TextField(blank=True, null=True)  
    manual_linux = models.TextField(blank=True, null=True)  
    official_link = models.URLField(blank=True, null=True)  
    program_type = models.ForeignKey('ProgramType', on_delete=models.CASCADE)

    def clean(self):
        if self.logo:
            if not self.logo.name.lower().endswith('.svg'):
                raise ValidationError("The logo must be SVG.")

    def __str__(self):
        return self.name

