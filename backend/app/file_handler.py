import os
import aiofiles

async def save_uploaded_file(file):
    os.makedirs("uploads", exist_ok=True)
    file_path = f"uploads/{file.filename}"
    async with aiofiles.open(file_path, 'wb') as f:
        await f.write(await file.read())
    return file_path
