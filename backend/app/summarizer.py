from datetime import datetime
from app.config import db  # adjust if your config.py is in another folder

async def generate_summary(file_path: str):
    # Placeholder logic — you can replace this with real transcription/summarization logic
    transcript = "Sample transcript."
    summary = "Sample summary."

    # Extract just the filename
    filename = file_path.split("/")[-1]

    # Create a document to insert
    summary_doc = {
        "filename": filename,
        "transcript": transcript,
        "summary": summary,
        "timestamp": datetime.utcnow()
    }

    # Insert into the 'summaries' collection
    await db.summaries.insert_one(summary_doc)

    return {
        "transcript": transcript,
        "summary": summary
    }
