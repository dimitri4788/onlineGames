from google.appengine.ext import ndb

# Create your models here.
class Movies(ndb.Model):
    movieNameText = ndb.StringProperty()

    def getKind(self):
        return self.key.kind()

    def getId(self):
        return self.key.id()

    def __str__(self):
        return self.movieNameText
