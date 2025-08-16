# backend/app/config.py

import os
import motor.motor_asyncio
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv(".env.local")


# Get MongoDB URI from .env
MONGO_URI = os.getenv("MONGO_URI")

# Raise error if not found
if not MONGO_URI:
    raise ValueError("MONGO_URI not found in .env")

# Create async MongoDB client
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)

# Reference to the database
db = client["meeting_summarizer"]
