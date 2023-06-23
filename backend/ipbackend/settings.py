import io
import os
from urllib.parse import urlparse

import environ

# Import the original settings from each template
from .basesettings import *

# Load the settings from the environment variable
env = environ.Env()


# check if file exist
if os.path.exists('.env'):
    env.read_env('.env')
else:
    env.read_env(io.StringIO(os.environ.get("APPLICATION_SETTINGS", None)))

# Setting this value from django-environ

SECRET_KEY = env("SECRET_KEY")

ALLOWED_HOSTS = ['*']
CSRF_TRUSTED_ORIGINS = ['http://localhost:3000', 'http://*']

# Default false. True allows default landing pages to be visible
DEBUG = env("DEBUG", default=False)

HOST = env("HOST", default=None)

STATIC_ROOT = 'assets'


# ACCOUNT_CONFIRM_EMAIL_ON_GET = False
# SESSION_LOGIN = False
# USE_JWT = True

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]