"""adding male-female columns

Revision ID: 379df0dd4bf6
Revises: 25d9775b8ed1
Create Date: 2022-08-20 20:54:08.987924

"""
from alembic import op
import sqlalchemy as sa
import enum
from sqlalchemy.dialects import postgresql



# revision identifiers, used by Alembic.
revision = '379df0dd4bf6'
down_revision = '25d9775b8ed1'
branch_labels = None
depends_on = None

class Gender(enum.Enum):

    male = "male"
    female = "female"
    other = "other"

def upgrade() -> None:
    gender = postgresql.ENUM(Gender, name="gender")
    gender.create(op.get_bind(), checkfirst=True)
    op.add_column('users', sa.Column('gender',  gender))

    pass


def downgrade() -> None:
    op.drop_column("users", "gender")

    pass
