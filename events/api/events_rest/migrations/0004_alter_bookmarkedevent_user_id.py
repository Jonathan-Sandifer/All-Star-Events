# Generated by Django 4.0.3 on 2022-06-22 19:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("events_rest", "0003_alter_event_picture_url"),
    ]

    operations = [
        migrations.AlterField(
            model_name="bookmarkedevent",
            name="user_id",
            field=models.IntegerField(),
        ),
    ]
