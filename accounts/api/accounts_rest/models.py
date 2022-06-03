from django.db import models

# Create your models here. # still have to link app together 

class User(models.Model):
  first_name = models.CharField(max_length=30, unique=False)
  last_name = models.CharField(max_length=30, unique=False)
  user_name = models.CharField(max_length=30, unique=True )
  email = models.EmailField(max_length=100, unique=True)
  password = models.CharField(max_length=20, unique=True)

  def __str__(self):
    return self.user_name
  

class Preferences(models.Model):
  name = models.CharField(max_length= 50, unique=True)
  user = models.ManyToManyField("User", related_name="preferences")

  def __str__(self):
    return self.name
