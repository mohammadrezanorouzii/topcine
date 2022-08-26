"""big changes to the database table

Revision ID: b4d33f94d4d2
Revises: 379df0dd4bf6
Create Date: 2022-08-22 14:19:08.387770

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b4d33f94d4d2'
down_revision = '379df0dd4bf6'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.drop_column("users", "username")
    op.drop_column("users", "verified")
    pass


def downgrade() -> None:
    pass
