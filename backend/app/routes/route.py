from fastapi import APIRouter, UploadFile, File, HTTPException
from app.summarizer import generate_summary
from app.config import db
from uuid import uuid4
import os
import shutil
from datetime import datetime
from bson import ObjectId

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/summarize")
async def summarize(file: UploadFile = File(...)):
    try:
        # Save file with a unique filename
        ext = os.path.splitext(file.filename)[1]
        unique_filename = f"{uuid4()}{ext}"
        file_path = os.path.join(UPLOAD_DIR, unique_filename)

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Generate transcript and summary
        result = await generate_summary(file_path)

        # Store in MongoDB
        record = {
            "original_filename": file.filename,
            "saved_filename": unique_filename,
            "transcript": result["transcript"],
            "summary": result["summary"],
            "timestamp": datetime.utcnow()
        }
        insert_result = await db.summaries.insert_one(record)

        return {
            "message": "Summary generated and saved successfully.",
            "id": str(insert_result.inserted_id),
            "data": result
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/summaries")
async def get_all_summaries():
    try:
        summaries_cursor = db.summaries.find().sort("timestamp", -1)
        summaries = []
        async for summary in summaries_cursor:
            summary["_id"] = str(summary["_id"])  # Convert ObjectId to string
            summaries.append(summary)
        return {"data": summaries}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/summary/{summary_id}")
async def get_summary_by_id(summary_id: str):
    try:
        summary = await db.summaries.find_one({"_id": ObjectId(summary_id)})
        if not summary:
            raise HTTPException(status_code=404, detail="Summary not found")
        summary["_id"] = str(summary["_id"])
        return {"data": summary}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
