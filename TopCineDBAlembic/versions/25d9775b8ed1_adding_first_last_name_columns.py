"""adding first-last name columns

Revision ID: 25d9775b8ed1
Revises: 7392016f8af5
Create Date: 2022-08-20 20:47:42.621624

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '25d9775b8ed1'
down_revision = '7392016f8af5'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column("users", sa.Column('first_name', sa.String(), nullable=False))
    op.add_column("users", sa.Column('last_name', sa.String(), nullable=False))
    pass


def downgrade() -> None:
    op.drop_column("users", "first_name")
    op.drop_column("users", "last_name")
    pass
