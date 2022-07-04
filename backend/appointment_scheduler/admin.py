from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserChangeForm
from .models import Appointment
from .models import AvailabilityTime
from .models import Employee
from .models import InquiryMessage
from .models import User


class EmployeeInline(admin.StackedInline):
    model = Employee
    can_delete = True
    verbose_name_plural = 'employee'


class EmployeeChangeForm(UserChangeForm):
    

    class Meta(UserChangeForm.Meta):
        model = Employee

    
class EmployeeAdmin(UserAdmin):
    form = EmployeeChangeForm
    fieldsets = UserAdmin.fieldsets + (
        ('Employee Info', {'fields': ('is_available',)}),
    )
    readonly_fields = ('date_joined',)


class UserAdmin(UserAdmin):
    list_display = ('first_name', 'last_name', 'email', 'username', 'is_staff',)
    readonly_fields = ('date_joined', )


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