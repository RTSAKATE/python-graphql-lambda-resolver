import os
# import jwt
import sys

class Authenticate:   

    def resolve(self, event):
        
        # is_authenticated = self.validate_authorization_header(event)
        # if not is_authenticated:
        #     raise jwt.DecodeError("Unauthorized")
        return event

    def validate_authorization_header(self, event):
        #headers = event.get("headers")
        # Authentication code will go here
        return True
        
        


