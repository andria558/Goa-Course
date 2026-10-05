from django.http import HttpResponse
from django.template import loader

def myfirst_view(request):
    templates = loader.get_template('myfirst.html')
    return HttpResponse(templates.render())
