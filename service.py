"""
"""

import os
import flask
import flask_sockets
from gevent import pywsgi
from geventwebsocket import handler

MOD_ROOT, _ = os.path.split(os.path.abspath(__file__))
_, MOD_NAME = os.path.split(MOD_ROOT)
APP = flask.Flask(MOD_NAME, static_url_path="", static_folder=MOD_ROOT+"/public")
SOCKETS = flask_sockets.Sockets(APP)

@APP.route("/")
def index():
    """
    """
    return APP.send_static_file("index.html")

@SOCKETS.route("/echo")
def echo(ws):
    """For now, basic echo handler
    """
    while not ws.closed:
        message = ws.receive()
        ws.send(message)

def main():
    """
    """
    pywsgi.WSGIServer(("0.0.0.0", 80), APP, **{
        "handler_class": handler.WebSocketHandler
    }).serve_forever()

if __name__ == "__main__":
    main()
