"""added watchlist table

Revision ID: 786eea88cbb5
Revises: 427fbe099753
Create Date: 2022-08-22 15:49:45.755710

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '786eea88cbb5'
down_revision = '427fbe099753'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table("movies", sa.Column("movie_id", sa.Integer(), nullable = False),
                              sa.Column("user_id", sa.Integer(), nullable = False))
    op.create_foreign_key("users_user_fk", source_table = "movies", referent_table= "users", local_cols = ["user_id"], remote_cols = ["id"], ondelete = "CASCADE")
    pass


def downgrade() -> None:
    op.drop_column("movies", "movie_id")
    op.drop_column("movie", "user_id")
    op.drop_table("movies")
    pass
