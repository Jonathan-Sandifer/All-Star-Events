from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here. # still have to link app together

class User(AbstractUser):
  first_name = models.CharField(max_length=30, unique=False)
  last_name = models.CharField(max_length=30, unique=False)
  email = models.EmailField(max_length=100, unique=True)

  def __str__(self):
    return self.user_name


class Preferences(models.Model):
  name = models.CharField(max_length= 50, unique=True)
  user = models.ManyToManyField(User, related_name="preferences")

  def __str__(self):
    return self.name
