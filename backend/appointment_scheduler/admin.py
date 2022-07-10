from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserChangeForm
from django.urls import resolve
from .models import Appointment
from .models import AvailabilityTime
from .models import Employee
from .models import InquiryMessage
from .models import User
from .models import Customer

class EmployeeInline(admin.StackedInline):
    model = Employee
    can_delete = True
    verbose_name_plural = 'employee'

class AvailabilityInline(admin.TabularInline):
    model = AvailabilityTime
    can_delete = True
    verbose_name_plural = 'Availabilities'
    extra = 0


class AppointmentEmployeeInline(admin.TabularInline):
    model = Appointment
    can_delete = True
    verbose_name_plural = 'Appointments'
    extra = 0   

    def get_object(self, request):
        resolved = resolve(request.path_info)
        print("Resolved", resolved.kwargs)
        if resolved.kwargs:
            return self.parent_model.objects.get(pk=resolved.kwargs['object_id'])
        return None

    def formfield_for_foreignkey(self, db_field, request=None, **kwargs):
        field = super(AppointmentEmployeeInline, self).formfield_for_foreignkey(db_field, request, **kwargs)

        if db_field.name == 'appointment_date':
            if self.get_object(request) is not None:
                field.queryset = field.queryset.filter(employee=self.get_object(request))
            else:
                print("No parent found")
                field.queryset = field.queryset.none()
        return field

class EmployeeChangeForm(UserChangeForm):
    

    class Meta(UserChangeForm.Meta):
        model = Employee

    
class EmployeeAdmin(UserAdmin):
    form = EmployeeChangeForm
    fieldsets = UserAdmin.fieldsets + (
        ('Employee Info', {'fields': ('is_available',)}),
    )
    readonly_fields = ('date_joined',)
    list_display = ('first_name', 'last_name', 'email', 'username')
    inlines = (AvailabilityInline, AppointmentEmployeeInline, )






class CustomerAdmin(UserAdmin):
    list_display = ('first_name', 'last_name', 'email', 'username')
    readonly_fields = ('date_joined',)


class UserAdmin(UserAdmin):
    list_display = ('first_name', 'last_name', 'email', 'username', 'is_staff',)
    readonly_fields = ('date_joined', )


class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('customer', 'employee', 'appointment_date')


class AvailabilitiesAdmin(admin.ModelAdmin):
    list_display = ('start_from', 'end_at', 'employee')


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
admin.site.register(Customer, CustomerAdmin)