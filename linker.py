from flask_restful import Resource, reqparse
from flask_jwt_extended import jwt_required
from urllib.parse import urlparse
from flask import redirect

parser_linker = reqparse.RequestParser()
parser_linker.add_argument('l', help='Something went wrong', required=True)
parser_linker.add_argument('r_token',help='Something went wrong', required=True)


class urllinker(Resource):

    def get(self):
        data = parser_linker.parse_args()
        redirect_url = urlparse(data['l'])
        print(redirect_url.scheme)
        if (redirect_url.scheme == "http" or redirect_url.scheme == "https"):
           return "<p>Redirecting to "+redirect_url.netloc,302,{'Location': redirect_url.geturl()}
        elif (redirect_url.scheme == "javascript" or redirect_url.scheme == "data"):
            return "",302,{'Location': "https://i.imgflip.com/2w8wup.jpg"}
        else:
            return "Something went wrong", 302, {'Location': "https://127.0.0.1/"}
