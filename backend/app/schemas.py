from pydantic import BaseModel

class MeetingSummary(BaseModel):
    meeting_id: str
    transcript: str
    summary: str
