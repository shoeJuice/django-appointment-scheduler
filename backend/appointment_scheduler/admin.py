from django.contrib import admin
from .models import Appointment
from .models import AvailabilityTime
from .models import Employee
from .models import InquiryMessage
from .models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email_address')


class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email_address', 'is_available')


class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('customer', 'employee', 'appointment_date')


class AvailabilitiesAdmin(admin.ModelAdmin):
    list_display = ('start_from', 'end_at')


class InquiryAdmin(admin.ModelAdmin):
    list_display = ('sender_first_name',
'sender_last_name',
'sender_email_address',
'sender_phone_number',
'inquiry_description')
# Register your models here.

admin.site.register(User, UserAdmin)
admin.site.register(Employee, EmployeeAdmin)
admin.site.register(AvailabilityTime, AvailabilitiesAdmin)
admin.site.register(InquiryMessage, InquiryAdmin)
admin.site.register(Appointment, AppointmentAdmin)