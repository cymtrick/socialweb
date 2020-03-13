from flask import Flask
from database import db_session
from flask_restful import Api
import rest_resources
from flask_jwt_extended import JWTManager
from keys import JWT_PRIVATE_KEY,JWT_PUBLIC_KEY
from flask_cors import CORS
import datetime
import linker
from database_schema import killTokenModel


app = Flask(__name__)
CORS(app,resources={r"/*": {"origins": "*","supports_credentials":True}})
app.secret_key="@#$aWe$s-@#sdfER-@asdaERA"
app.config['MAX_CONTENT_LENGTH'] = 40 * 1024 * 1024
api = Api(app)


app.config['JWT_PUBLIC_KEY'] = JWT_PUBLIC_KEY
app.config['JWT_PRIVATE_KEY'] = JWT_PRIVATE_KEY

app.config['JWT_ALGORITHM'] = 'RS256'
app.config['JWT_BLACKLIST_ENABLED'] = True
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']
app.config['PROPAGATE_EXCEPTIONS'] = True
app.config['JWT_COOKIE_CSRF_PROTECT'] = True
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=15)
app.config['SESSION_COOKIE_SECURE'] = True
app.config['REMEMBER_COOKIE_SECURE'] = True
jwt = JWTManager(app)


version = "/v0.1"


api.add_resource(rest_resources.UserRegistration, version+'/registration')
api.add_resource(rest_resources.UserLogin, version+'/login')
api.add_resource(rest_resources.Logout, version+'/logout')


app.debug = True


@jwt.token_in_blacklist_loader
def check_if_token_in_blacklist(decrypted_token):
    jti = decrypted_token['jti']
    return killTokenModel.is_jti_blacklisted(jti)


@app.after_request
def apply_caching(response):
    response.headers["X-Frame-Options"] = "SAMEORIGIN"
    response.headers["Server"] = "irun v0.1"
    response.headers["Cache-Control"] = "private, no-cache, no-store, must-revalidate"
    return response




@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()

