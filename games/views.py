from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render
from django.template import RequestContext, loader
from google.appengine.ext import ndb

from small import moviesList


def index(request):
    """It shows the first page of the application."""

    # Create a Template object by loading it.
    # get_template(...) loads a template with the given name, compiles it and returns a Template object.
    template = loader.get_template('games/index.html')

    # Fill the RequestContext. You render the template with a Context.
    context = RequestContext(request)
    context.push({})

    return HttpResponse(template.render(context))


def hangwoman(request):
    """It is the main method that starts the game."""

    template = loader.get_template('games/hangwoman.html')
    context = RequestContext(request)
    context.push({})
    return HttpResponse(template.render(context))


def aboutMe(request):
    """It shows the about me page."""

    template = loader.get_template('games/about.html')
    context = RequestContext(request)
    context.push({})
    return HttpResponse(template.render(context))
