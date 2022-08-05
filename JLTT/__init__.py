from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

# pip install flask-sqlalchemy or pip3 install flask-sqlalchemy
# pip install flask-bcrypt or pip3 install flask-bcrypt
"""
	>>> from flask_bcrypt import Bcrypt
	>>> bc = Bcrypt()
	>>> bc.generate_password_hash('testing')
	b'$2b$12$DxPdGRDPw3j43cdE/NA/IOOoO6OodpjIu13oX9LA0IS7xfOi.PRge'
	>>> bc.generate_password_hash('testing').decode('utf-8') - to string
	'$2b$12$45B0m/8Mv2f82Bw1vzHcQ..3/cyULDGRiqxK0YpxPOByc6FuPjLVq'
	>>> hashed_pw = bc.generate_password_hash('testing').decode('utf-8')
	>>> bc.check_password_hash(hashed_pw, 'password')
	False
	>>> bc.check_password_hash(hashed_pw, 'testing')
	True

	This is how it is going to hash and verify password
	>>>  
"""
app = Flask(__name__)
app.config['SECRET_KEY'] = 'ea73527ce29ed11f12ed800a2cfc4b18'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
# ///, these three slashes are a relative path from the current file 
# which means this site.db file should should get created in our project
# directory alongside our Python module that we're currently in
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
login_manager.login_message_category = 'info'

from JLTT import routes


"""
- python3
- from JLTT.model import db
- db.create_all() --> create the empty table
- User.query.all() --> [] empty lists 

"""