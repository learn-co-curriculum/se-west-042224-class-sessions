from flask import Flask, abort, make_response, request
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import Project, db

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True
# Note: `app.json.compact = False` Configures JSON responses to print on indented lines
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)


class Projects(Resource):
    def get(self):
        try:
            proj_list = [proj.to_dict() for proj in Project.query.all()]
        except:
            abort(500)
        return make_response(proj_list, 200)

    def post(self):
        req_json = request.get_json()
        new_proj = Project(**req_json)
        db.session.add(new_proj)
        db.session.commit()
        return make_response(new_proj.to_dict(), 201)


class ProjectByID(Resource):
    def get(self, id):
        proj = Project.query.filter(Project.id == id).first()
        if not proj:
            abort(404)
        return make_response(proj.to_dict(), 200)

    def patch(self, id):
        proj = Project.query.filter(Project.id == id).first()
        if not proj:
            abort(404)
        for attr, value in request.get_json().items():
            setattr(proj, attr, value)
        db.session.add(proj)
        db.session.commit()
        return make_response(proj.to_dict(), 200)

    def delete(self, id):
        proj = Project.query.filter(Project.id == id).first()
        if not proj:
            abort(404)
        db.session.delete(proj)
        db.session.commit()
        return make_response("", 204)


api.add_resource(Projects, "/projects")
api.add_resource(ProjectByID, "/projects/<int:id>")


if __name__ == "__main__":
    app.run(port=5555, debug=True)
