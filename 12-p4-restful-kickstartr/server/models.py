from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()


class Project(db.Model, SerializerMixin):

    __tablename__ = "projects"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    owner = db.Column(db.String, nullable=False)
    goal_amount = db.Column(db.Integer, nullable=False)
    amount_raised = db.Column(db.Integer, default=0)

    def __repr__(self):
        return f"<Project id: {self.id} title: {self.title} owner: {self.owner} goal_amount: {self.goal_amount} amount_raised: {self.amount_raised} >"
