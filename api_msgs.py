# Copyright 2012 Arunjit Singh. All Rights Reserved.

"""API message formats."""

__author__ = 'Arunjit Singh <arunjit@me.com>'

from protorpc import messages


class EmailStringRequest(messages.Message):
  name = messages.StringField(1, default='')
  email = messages.StringField(2, required=True)


class EmailStringResponse(messages.Message):
  email_string = messages.StringField(1)
