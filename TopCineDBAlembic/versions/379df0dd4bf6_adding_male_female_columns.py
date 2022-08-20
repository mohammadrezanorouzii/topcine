"""adding male-female columns

Revision ID: 379df0dd4bf6
Revises: 25d9775b8ed1
Create Date: 2022-08-20 20:54:08.987924

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '379df0dd4bf6'
down_revision = '25d9775b8ed1'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column("users", sa.Column("is_male", sa.Boolean(), nullable = True, server_default = "False"))
    op.add_column("users", sa.Column("is_female", sa.Boolean(), nullable = True, server_default = "False"))
    op.add_column("users", sa.Column("is_other", sa.Boolean(), nullable = True, server_default = "False"))
    pass


def downgrade() -> None:
    op.drop_column("users", "is_male")
    op.drop_column("users", "is_female")
    op.drop_column("users", "is_other")
    pass
