from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render
from django.template import RequestContext, loader
from google.appengine.ext import ndb


def index(request):
    # Create a Template object by loading it.
    # get_template(...) loads a template with the given name, compiles it and returns a Template object.
    template = loader.get_template('games/index.html')

    # Fill the RequestContext. You render the template with a Context.
    context = RequestContext(request)
    context.push({})

    return HttpResponse(template.render(context))
