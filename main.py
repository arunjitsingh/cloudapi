# Copyright 2013 Arunjit Singh. All Rights Reserved.
"""."""

__author__ = 'Arunjit Singh <arunjit@me.com>'

from ajpy.appengine.handlers import base

import config
import templates


class Index(base.RequestHandler):

  URL_PATTERNS = [r'/']

  def get(self):
    tpl = templates.Get('index.html')
    self.SendHtml(tpl.render({}))


app = base.CreateApplication(Index, debug=config.DEBUGGING)
