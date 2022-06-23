from django.db import models
# from account


class Event(models.Model):
    name = models.CharField(max_length=250)
    event_type = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    venue_name = models.CharField(max_length=100)
    picture_url = models.URLField(null=True, blank=True)

    def __str__(self):
      return self.name

class BookmarkedEvent(models.Model):
  user_id = models.IntegerField(unique=False)
  event = models.ForeignKey(
    Event, 
    related_name = "event",
    on_delete=models.PROTECT,
  )
