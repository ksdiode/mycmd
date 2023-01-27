# coding: utf-8
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.schema import FetchedValue
from sqlalchemy.orm import relationship
from shared_db import db

class ${module}(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)


  def __init__(self, **kargs):
    # self.id = kargs.get('id', -1)

  def __str__(self):
    return f'<${module} {self.id}>'
