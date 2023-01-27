# coding: utf-8
from flask_sqlalchemy import SQLAlchemy
from flask.json import JSONEncoder
import datetime
from sqlalchemy.ext.declarative import DeclarativeMeta

db = SQLAlchemy()

class CustomJSONEncoder(JSONEncoder):
  def default(self, obj):
    if isinstance(obj, set):
      return list(obj)

    if isinstance(obj, datetime.datetime):
      return str(obj)  

    if isinstance(obj.__class__, DeclarativeMeta): # an SQLAlchemy class
      return  { key: value for (key, value) in obj.__dict__.items() 
                if not key.startswith('_') }
    
    return JSONEncoder.default(self, obj)
