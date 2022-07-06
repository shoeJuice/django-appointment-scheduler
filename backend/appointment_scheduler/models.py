from datetime import datetime
from datetime import timezone
import uuid

from django import forms
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.db import models


class UserManager(BaseUserManager):

    def create_user(self, username, email, password, **kwargs):
        """
        Create and return a `User` with an email address, username, and password.
        """
        if username is None:
            raise TypeError('Users must have a username.')
        if email is None:
            raise TypeError('Users must have an email address.')
        if password is None:
            raise TypeError('Users must have a password.')

        date_joined = datetime.now(timezone.utc)
        user = self.model(username=username, email=self.normalize_email(email), date_joined=date_joined, **kwargs)
        user.set_password(password)
        user.save(using=self._db)

        return user
    
    def create_superuser(self, username, email, password, first_name, last_name):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError('Admins must have a password')
        if email is None:
            raise TypeError('Admins must have an email.')
        if username is None:
            raise TypeError('Admins must have a username.')
        if first_name is None:
            raise TypeError('Admins must have a first name.')
        if last_name is None:
            raise TypeError('Admins must have a last name.')

        user = self.create_user(username, email, password, first_name=first_name, last_name=last_name)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user

# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
    objects = UserManager()

    first_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    email = models.EmailField(db_index=True, unique=True, null=True, blank=True)
    username = models.CharField(db_index=True, max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(editable=False, auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    

    @property
    def f_name(self):
        return self.first_name

    @property
    def l_name(self):
        return self.last_name

    def __str__(self):
        return self.username


class Employee(User):
    is_available = models.BooleanField(null=True)


    class Meta:
        permissions = [
            ("view_users", "Can view all users")
        ]


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

