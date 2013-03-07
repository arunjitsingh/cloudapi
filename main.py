# Copyright 2013 Arunjit Singh. All Rights Reserved.
"""."""

__author__ = 'Arunjit Singh <arunjit@me.com>'

from ajpy.appengine.handlers import base

import config


class Index(base.RequestHandler):

  URL_PATTERNS = [r'/']

  def get(self):
    self.SendJson('Hello, world!', add_prefix=False)


app = base.CreateApplication(Index, debug=config.DEBUGGING)
