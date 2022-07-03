from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email_address')


class EmployeeSerializer(serializers.ModelSerializer):

    availability = serializers.StringRelatedField(many=True)
    appointments = serializers.HyperlinkedRelatedField(many=True, view_name='appointment-detail', read_only=True)

    class Meta:
        model = Employee
        fields = ('id', 'first_name', 'last_name', 'email_address', 'is_available', 'availability', 'appointments')

class AppointmentSerializer(serializers.ModelSerializer):

    customer = serializers.HyperlinkedRelatedField(many=False, view_name='user-detail', read_only=True)
    employee = serializers.HyperlinkedRelatedField(many=False, view_name='employee-detail', read_only=True)
    appointment_date = serializers.StringRelatedField(many=False)

    class Meta:
        model = Appointment
        fields = ('id', 'customer', 'employee', 'appointment_date')
