from fastapi import FastAPI, UploadFile
from app import filehandler, summerizer, config, schemas

app = FastAPI()

@app.post("/summarize")
async def summarize_audio(file: UploadFile):
    file_path = filehandler.save_uploaded_file(file)
    summary = await summerizer.generate_summary(file_path)

    # Store in DB
    document = schemas.MeetingSummary(
        meeting_id=file.filename,
        transcript=summary["transcript"],
        summary=summary["summary"]
    )
    await config.db["summaries"].insert_one(document.dict())

    return {"summary": summary["summary"]}
