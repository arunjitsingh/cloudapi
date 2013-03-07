# Copyright 2013 Arunjit Singh. All Rights Reserved.
"""The API."""

__author__ = 'Arunjit Singh <arunjit@me.com>'

from google.appengine.ext import endpoints
from protorpc import remote

import api_msgs

@endpoints.api(name='apitest', version='v1', description='API test')
class ApiTestApi(remote.Service):

  @endpoints.method(
      api_msgs.EmailStringRequest, api_msgs.EmailStringResponse,
      path='email', http_method='POST', name='email.stringify',
      allowed_client_ids=[endpoints.API_EXPLORER_CLIENT_ID])
  def StringifyEmail(self, request):
    """Stringify's an email.

    Args:
      request: (api_msgs.EmailStringRequest).

    Returns:
      (api_msgs.EmailStringResponse)
    """
    if request.name:
      string = '"%s" <%s>' % (request.name, request.email)
    else:
      string = request.email
    return api_msgs.EmailStringResponse(email_string=string)


app = endpoints.api_server([ApiTestApi], restricted=False)
