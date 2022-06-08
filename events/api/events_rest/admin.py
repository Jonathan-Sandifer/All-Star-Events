from django.contrib import admin
from .models import Event, BookmarkedEvent

# Register your models here.

class EventAdmin(admin.ModelAdmin):
  pass
class BookmarkedEventAdmin(admin.ModelAdmin):
  pass

admin.site.register(Event, EventAdmin)
admin.site.register(BookmarkedEvent, BookmarkedEventAdmin)
