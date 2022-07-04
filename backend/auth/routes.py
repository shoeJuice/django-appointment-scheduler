from rest_framework import routers
from .viewsets import LoginViewSet
from .viewsets import RefreshViewSet
from .viewsets import RegistrationViewSet


router = routers.DefaultRouter()


router.register(r'auth/login', LoginViewSet, 'auth-login')
router.register(r'auth/register', RegistrationViewSet, 'auth-register')
router.register(r'auth/refresh', RefreshViewSet, 'auth-refresh')


urlpatterns = [
    *router.urls
]