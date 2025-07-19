from fastapi import FastAPI, UploadFile, File, HTTPException
from app import file_handler, summarizer, config, schemas
from app.routes import route  # <--- include this
import os
from uuid import uuid4
from app.config import db

app = FastAPI()

# Mount the router (from routes.py)
app.include_router(route.router)  # <--- This is required!

@app.on_event("startup")
async def startup_db_check():
    try:
        await db.command("ping")
        print("✅ Connected to MongoDB successfully")
    except Exception as e:
        print("❌ MongoDB connection error:", e)
