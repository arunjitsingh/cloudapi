# Copyright 2012 Arunjit Singh. All Rights Reserved.

"""App Engine configuration.

Adds lib/ to sys.path.
"""

__author__ = 'Arunjit Singh <arunjit@me.com>'

import os
import sys

_here = os.path.dirname(__file__)
_lib = os.path.join(_here, 'lib')

sys.path.insert(1, _lib)

appstats_DEBUG = True

appstats_CALC_RPC_COSTS = True


def webapp_add_wsgi_middleware(app):
  """Add Appstats recording."""
  from google.appengine.ext.appstats import recording
  app = recording.appstats_wsgi_middleware(app)
  return app
