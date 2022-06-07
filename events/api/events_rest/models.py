from django.db import models
# from account

# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=250)
    event_type = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    venue_name = models.CharField(max_length=100)
    picture_url = models.URLField(null=True)

    def __str__(self):
      return self.username

class User(models.Model):
    # user = models.ManyToManyField(User, related_name="events")

#     def __str__(self):
#      return self.user
#event VO possibly 
#poller or pub sub 
