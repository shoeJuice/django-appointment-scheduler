from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Appointment
from .models import Employee
from .models import InquiryMessage



class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = get_user_model()
        fields = ('id', 'first_name', 'last_name', 'email', 'username', 'is_active', 'date_joined', 'is_staff')
        read_only_field = ('is_active', 'date_joined', 'is_staff')

class EmployeeSerializer(serializers.ModelSerializer):

    availability = serializers.StringRelatedField(many=True)
    appointments = serializers.HyperlinkedRelatedField(many=True, view_name='appointment-detail', read_only=True)

    class Meta:
        model = Employee
        fields = ('id', 'first_name', 'last_name', 'email', 'is_available', 'availability', 'appointments')

class AppointmentSerializer(serializers.ModelSerializer):

    customer = serializers.HyperlinkedRelatedField(many=False, view_name='user-detail', read_only=True)
    employee = serializers.HyperlinkedRelatedField(many=False, view_name='employee-detail', read_only=True)
    appointment_date = serializers.StringRelatedField(many=False)

    class Meta:
        model = Appointment
        fields = ('id', 'customer', 'employee', 'appointment_date')


class InquirySerializer(serializers.ModelSerializer):


    class Meta:
        model = InquiryMessage
        fields = ('sender_first_name', 'sender_last_name', 'sender_email_address', 'sender_phone_number', 'inquiry_description')