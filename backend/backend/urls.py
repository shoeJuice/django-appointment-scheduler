"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include
from django.urls import path
from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views

from appointment_scheduler import views



router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'user')
#router.register(r'user', views.UserAPIView, basename='user')
router.register(r'employees', views.EmployeeView, 'employee')
router.register(r'appointments', views.AppointmentView, 'appointment')
router.register(r'inquiries', views.InquiryView, 'inquiry')
router.register(r'availabilities', views.AvailabilityView, 'availability')




urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/user/', views.UserAPIView.as_view(), name='login'),
    path('api/register/', views.RegisterUserAPIView.as_view(), name='register'),
    path('auth/token', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh', jwt_views.TokenRefreshView.as_view(), name='token_refresh')
]
