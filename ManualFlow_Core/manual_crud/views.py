from django.shortcuts import render
from rest_framework import viewsets
from .models import Program, ProgramType
from .serializers import ProgramSerializer, ProgramTypeSerializer

class ProgramTypeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProgramType.objects.all()
    serializer_class = ProgramTypeSerializer

class ProgramViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer

