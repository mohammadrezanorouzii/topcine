"""fixing watchlists table

Revision ID: af65aa158775
Revises: 4367cde49c60
Create Date: 2022-08-25 16:59:59.957698

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'af65aa158775'
down_revision = '4367cde49c60'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table("watchlists", sa.Column("movie_id", sa.Integer(), nullable = False),
                                  sa.Column("user_id", sa.Integer(), nullable = False))
    pass


def downgrade() -> None:
    pass
