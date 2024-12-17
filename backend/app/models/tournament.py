import enum
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Table, Enum
from app.db.base_class import Base
from datetime import datetime

class TournamentStatus(str, enum.Enum):
    DRAFT = "DRAFT"
    REGISTRATION = "REGISTRATION"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETED = "COMPLETED"

class Tournament(Base):
    __tablename__ = "tournaments"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    type = Column(String)  # single_elimination, double_elimination, round_robin
    rules = Column(String, nullable=True)
    max_teams = Column(Integer, nullable=True)
    start_date = Column(DateTime, nullable=True)
    end_date = Column(DateTime, nullable=True)
    created_by = Column(Integer, ForeignKey("users.id"))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    status = Column(Enum(TournamentStatus), default=TournamentStatus.REGISTRATION)

    # ... остальные отношения ... 