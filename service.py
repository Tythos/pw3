"""
"""

import os
import flask
from gevent import pywsgi

MOD_ROOT, _ = os.path.split(os.path.abspath(__file__))
_, MOD_NAME = os.path.split(MOD_ROOT)
APP = flask.Flask(MOD_NAME, static_url_path="", static_folder=MOD_ROOT+"/public")

@APP.route("/")
def index():
    """
    """
    return APP.send_static_file("index.html")

def main():
    """
    """
    pywsgi.WSGIServer(("0.0.0.0", 80), APP).serve_forever()

if __name__ == "__main__":
    main()
