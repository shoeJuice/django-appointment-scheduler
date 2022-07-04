from django.shortcuts import render
from rest_framework import filters
from rest_framework import pagination
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .serializers import *
from .models import *


#Set Pagination Styles
class StandardResultsSetPagination(pagination.PageNumberPagination):
    
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 50

# Create your views here.
class UserView(viewsets.ModelViewSet):
    http_method_names = ('get')
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    filter_backends = (filters.OrderingFilter,)
    pagination_class = StandardResultsSetPagination
    ordering_fields = ('date_joined',)
    ordering = ('-date_joined')

    def get_queryset(self):
        if self.request.user.is_superuser:
            return User.objects.all()
    
    def get_object(self):
        lookup_field_value = self.kwargs[self.lookup_field]

        obj = User.objects.get(lookup_field_value)
        self.check_object_permissions(self.request, obj)

        return obj


class EmployeeView(viewsets.ModelViewSet):
    
    serializer_class = EmployeeSerializer
    pagination_class = StandardResultsSetPagination
    permission_classes = (IsAuthenticated,)
    def get_queryset(self):
        if self.request.user.is_staff:
            return Employee.objects.all()

class AppointmentView(viewsets.ModelViewSet):
    
    serializer_class = AppointmentSerializer
    pagination_class = StandardResultsSetPagination
    permission_classes = (IsAuthenticated, )
    def get_queryset(self):
        if self.request.user.is_staff:
            return Appointment.objects.all()


class InquiryView(viewsets.ModelViewSet):
    
    serializer_class = InquirySerializer
    queryset = InquiryMessage.objects.all()
    pagination_class = StandardResultsSetPagination