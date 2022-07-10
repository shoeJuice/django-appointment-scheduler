from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Appointment
from .models import Employee
from .models import InquiryMessage
from .models import User
from .models import Customer



class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = get_user_model()
        fields = ('id', 'first_name', 'last_name', 'email', 'username', 'is_active', 'date_joined', 'is_staff')
        read_only_field = ('is_active', 'date_joined', 'is_staff')

class EmployeeSerializer(serializers.ModelSerializer):

    availabilities = serializers.StringRelatedField(many=True)
    appointments = serializers.HyperlinkedRelatedField(many=True, view_name='appointment-detail', read_only=True)

    class Meta:
        model = Employee
        fields = ('id', 'first_name', 'last_name', 'email', 'is_available', 'availabilities', 'appointments')

class CustomerSerializer(serializers.ModelSerializer):

    appointments = serializers.HyperlinkedRelatedField(many=True, view_name='appointment-detail', read_only=True)

    class Meta:
        model = Customer
        fields = ('id', 'first_name', 'last_name', 'email', 'is_available', 'balance', 'appointments')

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


class RegisterUserSerializer(serializers.ModelSerializer):

    first_name = serializers.CharField(read_only=False, source='user.first_name')
    last_name = serializers.CharField(read_only=False, source='user.last_name')
    class Meta:
        model = get_user_model()
        fields = ['email', 'username', 'password', 'first_name', 'last_name',]

    #def to_internal_value(self, data):
    #    internal_value = super(RegisterUserSerializer, self).to_internal_value(data)
    #    my_first_name_field_raw_value = data.get("first_name")
    #    my_last_name_field_raw_value = data.get("last_name")
    #    my_first_name_field_value = my_first_name_field_raw_value
    #    my_last_name_field_value = my_last_name_field_raw_value
    #    internal_value.update({
    #        "first_name": my_first_name_field_value,
    #        "last_name": my_last_name_field_value
    #    })
    #    return internal_value

    def create(self, validated_data):
        print("Request Data:", self.data)
        print("Request Context", self.context.get('request').data)
        print("Validated Data: ", self.validated_data)
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['user']['first_name'],
            last_name=validated_data['user']['last_name']
        )
        print(validated_data.keys())
        return user

    
        