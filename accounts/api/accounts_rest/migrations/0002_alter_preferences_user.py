# Generated by Django 4.0.3 on 2022-06-03 02:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='preferences',
            name='user',
            field=models.ManyToManyField(related_name='preferences', to='accounts_rest.user'),
        ),
    ]