# Generated by Django 4.0.3 on 2022-06-08 20:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("parks_rest", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="BookmarkedPark",
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
            ],
        ),
        migrations.DeleteModel(
            name="User",
        ),
        migrations.AddField(
            model_name="park",
            name="state",
            field=models.CharField(blank=True, max_length=2, null=True),
        ),
        migrations.AlterField(
            model_name="park",
            name="description",
            field=models.TextField(),
        ),
        migrations.AddField(
            model_name="bookmarkedpark",
            name="park",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.PROTECT,
                related_name="park",
                to="parks_rest.park",
            ),
        ),
    ]
