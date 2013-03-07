# Copyright 2013 Arunjit Singh. All Rights Reserved.

from google.appengine.api import app_identity

from ajpy.appengine import context

PRODUCTION = context.IS_PRODUCTION
DEBUGGING = not PRODUCTION

APP_ID = app_identity.get_application_id()
