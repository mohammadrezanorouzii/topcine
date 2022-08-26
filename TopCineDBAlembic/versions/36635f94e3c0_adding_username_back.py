"""adding username back

Revision ID: 36635f94e3c0
Revises: 786eea88cbb5
Create Date: 2022-08-25 01:07:23.478275

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '36635f94e3c0'
down_revision = '786eea88cbb5'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column("users", sa.Column('username', sa.String(), nullable=True, unique = True))
    pass


def downgrade() -> None:
    op.drop_column("users", "username")
    pass
