from random import randint

from app import app
from faker import Faker
from models import Project, db

with app.app_context():
    print("Clearing previous data...")

    Project.query.delete()

    print("Seeding projects...")

    fake = Faker()

    projects = []

    for _ in range(10):
        proj = Project(
            owner=fake.name(),
            title=fake.bs().title(),
            goal_amount=randint(10000, 500000),
            amount_raised=randint(500, 9999),
        )
        projects.append(proj)
    db.session.add_all(projects)
    db.session.commit()
