from djwto import authentication as auth
import djwto.tokens as tokens
from djwto.exceptions import JWTValidationError
from django.core.exceptions import ImproperlyConfigured

def get_user_information(request):
    try:
        token = auth.get_raw_token_from_request(request)
        payload = tokens.decode_token(token)
        request.payload = payload
        return payload
    except (JWTValidationError, ImproperlyConfigured) as err:
        print(err)
        return None