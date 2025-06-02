from rest_framework import serializers
from .models import Program, ProgramType

class ProgramTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramType
        fields = '__all__'

class ProgramSerializer(serializers.ModelSerializer):
    program_type = ProgramTypeSerializer()
    logo_svg = serializers.SerializerMethodField()

    class Meta:
        model = Program
        fields = [
            'id', 'name', 'logo', 'creation_year', 'description',
            'manual_win', 'manual_mac', 'manual_linux',
            'official_link', 'program_type', 'logo_svg'
        ]

    def get_logo_svg(self, obj):
        if obj.logo and obj.logo.name.lower().endswith(".svg"):
            try:
                with open(obj.logo.path, "r", encoding="utf-8") as f:
                    return f.read()
            except Exception as e:
                return f"<!-- Error loading SVG: {e} -->"
        return None
