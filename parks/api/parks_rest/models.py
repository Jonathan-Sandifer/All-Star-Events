from django.db import models


class Park(models.Model):
    name = models.CharField(max_length=250)
    state = models.CharField(max_length=2, null=True, blank=True)
    description = models.TextField()
    picture_url = models.URLField(null=True)

    def __str__(self):
      return self.name


class BookmarkedPark(models.Model):
  user_id = models.IntegerField(unique=False)
  park = models.ForeignKey(
    Park, 
    related_name = "park",
    on_delete=models.PROTECT,
  )
    