import uuid

from django.db import models


# Create your models here.

class User(models.Model):
    first_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    email_address = models.CharField(max_length=140, null=True)

    @property
    def f_name(self):
        return self.first_name

    @property
    def l_name(self):
        return self.last_name

    def __str__(self):
        return (self.f_name + " " + self.l_name)


class Employee(User):
    is_available = models.BooleanField(null=True)


class AvailabilityTime(models.Model):
    start_from = models.DateTimeField(null=True)
    end_at = models.DateTimeField(null=True)   
    availability_for = models.ForeignKey(Employee, related_name='availability', on_delete=models.CASCADE)

    def __str__(self):
        start_time = self.start_from.strftime("%H:%M:%S %p")
        end_time = self.end_at.strftime("%H:%M:%S %p")
        return f"{start_time} - {end_time}"


class Appointment(models.Model):
    
    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='appointment_assigned_by')
    
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='appointments')
    
    appointment_date = models.ForeignKey(AvailabilityTime, on_delete=models.CASCADE)

    def __str__(self):
        return f'Appointment for {self.customer.l_name}, {self.customer.f_name} {self.appointment_date}'


class InquiryMessage(models.Model):

    sender_first_name = models.CharField(max_length=100, null=True)
    sender_last_name = models.CharField(max_length=100, null=True)
    sender_email_address = models.CharField(max_length=100, null=True)
    sender_phone_number = models.CharField(max_length=11, null=True)
    inquiry_description = models.TextField(max_length=500, null=True)

    def __str__(self) -> str:
        return f"Inquiry From: {self.sender_first_name} {self.sender_last_name}"

