# Generated by Django 4.0.3 on 2022-06-07 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('event_type', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
                ('venue_name', models.CharField(max_length=100)),
                ('picture_url', models.URLField(null=True)),
            ],
        ),
    ]
