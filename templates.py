# Copyright 2012 Arunjit Singh. All Rights Reserved.

"""Jinja templates for the app."""

__author__ = 'Arunjit Singh <arunjit@me.com>'

import os
import jinja2

_here = os.path.dirname(__file__)
_templates = os.path.join(_here, 'templates')

_env = jinja2.Environment(loader=jinja2.FileSystemLoader(_templates))

def Get(name, parent=None, globals=None):
  try:
    return _env.get_template(name, parent, globals)
  except jinja2.TemplateNotFound:
    return none
