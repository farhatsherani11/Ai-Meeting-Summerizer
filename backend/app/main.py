from fastapi import FastAPI, UploadFile
from app import file_handler, summarizer, config, schemas

app = FastAPI()

@app.post("/summarize")
async def summarize_audio(file: UploadFile):
    file_path = file_handler.save_uploaded_file(file)
    summary = await summarizer.generate_summary(file_path)

    document = schemas.MeetingSummary(
        meeting_id=file.filename,
        transcript=summary["transcript"],
        summary=summary["summary"]
    )
    await config.db["summaries"].insert_one(document.dict())

    return {"summary": summary["summary"]}
