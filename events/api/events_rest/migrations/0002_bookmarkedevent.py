# Generated by Django 4.0.3 on 2022-06-07 23:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("events_rest", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="BookmarkedEvent",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("user_id", models.IntegerField(unique=True)),
                (
                    "event",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        related_name="event",
                        to="events_rest.event",
                    ),
                ),
            ],
        ),
    ]
