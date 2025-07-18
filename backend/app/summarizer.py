async def generate_summary(audio_path):
    transcript = transcribe_audio(audio_path)  # You define this
    summary = summarize_text(transcript)       # You define this
    return {"transcript": transcript, "summary": summary}
