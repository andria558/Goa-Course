from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.myfirst_view, name='myfirst'),
    
]
