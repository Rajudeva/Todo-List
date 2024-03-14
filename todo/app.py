# app.py

from flask import Flask, jsonify, request
from graphene import ObjectType, String, Schema
from flask_graphql import GraphQLView

app = Flask(__name__)

class Query(ObjectType):
    hello = String(name=String(default_value="World"))

    def resolve_hello(self, info, name):
        return f'Hello {name}'

schema = Schema(query=Query)

app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))

if __name__ == '__main__':
    app.run(debug=True)
