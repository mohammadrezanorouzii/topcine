"""renaming movies table

Revision ID: 4367cde49c60
Revises: 36635f94e3c0
Create Date: 2022-08-25 12:24:19.783491

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4367cde49c60'
down_revision = '36635f94e3c0'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.drop_table("movies")
    op.create_table("watchlists", sa.Column("movie_id", sa.Integer(), nullable = False),
                              sa.Column("user_id", sa.Integer(), nullable = False))
    op.create_foreign_key("users_user_fk", source_table = "watchlists", referent_table= "users", local_cols = ["user_id"], remote_cols = ["id"], ondelete = "CASCADE")   
    pass


def downgrade() -> None:
    op.drop_table("watchlists")
    pass
