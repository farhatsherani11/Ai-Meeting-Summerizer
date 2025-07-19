from fastapi import FastAPI, UploadFile, File, HTTPException
from app import file_handler, summarizer, config, schemas
import os
from uuid import uuid4
from app.config import db

app = FastAPI()

@app.on_event("startup")
async def startup_db_check():
    try:
        await db.command("ping")
        print("✅ Connected to MongoDB successfully")
    except Exception as e:
        print("❌ MongoDB connection error:", e)

@app.post("/summarize")
async def summarize_audio(file: UploadFile = File(...)):
    try:
        # Save uploaded file to disk
        file_path = await file_handler.save_uploaded_file(file)

        # Generate transcript + summary
        summary = await summarizer.generate_summary(file_path)

        # Create document model for MongoDB
        document = schemas.MeetingSummary(
            meeting_id=file.filename,
            transcript=summary["transcript"],
            summary=summary["summary"]
        )

        # Insert into MongoDB
        await config.db["summaries"].insert_one(document.dict())

        return {
            "message": "Summary successfully generated and stored.",
            "filename": file.filename,
            "summary": summary["summary"]
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
