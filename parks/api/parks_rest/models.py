from django.db import models

# Create your models here.
class Park(models.Model):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=600)
    picture_url = models.URLField(null=True)

class User(models.Model):
    # id = models. PositiveSmallIntegerField()
    name = models.CharField(max_length=50)
    