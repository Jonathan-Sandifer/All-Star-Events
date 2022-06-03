from django.contrib import admin
from .models import User, Preferences

# Register your models here.
class UserAdmin(admin.ModelAdmin):
  pass
class PreferencesAdmin(admin.ModelAdmin):
  pass

admin.site.register(User, UserAdmin)
admin.site.register(Preferences, PreferencesAdmin)

