"""making database tables

Revision ID: 4cb180e8f21a
Revises: 
Create Date: 2022-08-20 18:48:00.281836

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4cb180e8f21a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table("users", sa.Column("id", sa.Integer(), nullable=False,primary_key=True),
                             sa.Column('username', sa.String(), nullable=False),
                             sa.Column('email', sa.String(), nullable=False),
                             sa.Column('username', sa.String(), nullable=False),
                             sa.Column("created_at", sa.TIMESTAMP(timezone = True), nullable = False, server_default = sa.text("NOW()")))
    pass


def downgrade() -> None:
    op.drop_table("users")
    pass
