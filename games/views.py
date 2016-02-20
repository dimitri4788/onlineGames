from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render
from django.template import RequestContext, loader
from google.appengine.ext import ndb

from movies import moviesList
from .models import Movies


def index(request):
    # Create a Template object by loading it.
    # get_template(...) loads a template with the given name, compiles it and returns a Template object.
    template = loader.get_template('games/index.html')

    # Fill the RequestContext. You render the template with a Context.
    context = RequestContext(request)
    context.push({})

    return HttpResponse(template.render(context))

def hangwoman(request):
    template = loader.get_template('games/hangwoman.html')
    context = RequestContext(request)
    context.push({})
    return HttpResponse(template.render(context))

def aboutMe(request):
    template = loader.get_template('games/about.html')
    context = RequestContext(request)
    context.push({})
    return HttpResponse(template.render(context))

def fillDatabase(request):
    moviesKey = []
    for idx in range(len(moviesList)):
        movieObj = Movies(movieNameText='%s'%(moviesList[idx]))
        moviesKey.append(movieObj.put())

    template = loader.get_template('games/about.html')
    context = RequestContext(request)
    context.push({})
    return HttpResponse(template.render(context))
