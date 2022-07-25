from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'ea73527ce29ed11f12ed800a2cfc4b18'

from JLTT import routes