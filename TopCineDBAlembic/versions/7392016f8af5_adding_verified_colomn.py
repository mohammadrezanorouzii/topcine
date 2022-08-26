"""adding verified colomn

Revision ID: 7392016f8af5
Revises: 0dedfbeeb03f
Create Date: 2022-08-20 20:06:43.530352

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7392016f8af5'
down_revision = '0dedfbeeb03f'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column("users", sa.Column("verified", sa.Boolean(), nullable = False, server_default = "FALSE"))
    pass


def downgrade() -> None:
    pass
