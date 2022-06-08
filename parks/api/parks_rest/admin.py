from django.contrib import admin
from .models import Park, BookmarkedPark

# Register your models here.

class ParkAdmin(admin.ModelAdmin):
  pass
class BookmarkedParkAdmin(admin.ModelAdmin):
  pass

admin.site.register(Park, ParkAdmin)
admin.site.register(BookmarkedPark, BookmarkedParkAdmin)