# Generated by Django 5.1.4 on 2025-05-28 11:52

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProgramType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Program',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('logo', models.ImageField(blank=True, null=True, upload_to='program_logos/')),
                ('creation_year', models.IntegerField()),
                ('description', models.TextField()),
                ('manual_win', models.TextField(blank=True, null=True)),
                ('manual_mac', models.TextField(blank=True, null=True)),
                ('manual_linux', models.TextField(blank=True, null=True)),
                ('official_link', models.URLField(blank=True, null=True)),
                ('program_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='manual_crud.programtype')),
            ],
        ),
    ]
