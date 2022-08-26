"""making lastname nullable

Revision ID: 427fbe099753
Revises: b4d33f94d4d2
Create Date: 2022-08-22 14:24:55.311488

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '427fbe099753'
down_revision = 'b4d33f94d4d2'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column("users", sa.Column('last_name', sa.String(), nullable=True))
    pass


def downgrade() -> None:
    op.drop_column("users", "last_name")
    pass
