"""adding password column

Revision ID: 0dedfbeeb03f
Revises: 4cb180e8f21a
Create Date: 2022-08-20 18:55:13.268879

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0dedfbeeb03f'
down_revision = '4cb180e8f21a'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column("users", sa.Column('password', sa.String(), nullable=False))
    pass


def downgrade() -> None:
    pass
