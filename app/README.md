# AI Email Generator

A simple React app that turns structured inputs into a professional email draft using OpenRouter.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and add your OpenRouter API key:

   ```bash
   cp .env.example .env
   ```

   Set `VITE_OPENROUTER_API_KEY` in `.env`.

3. Start the dev server:

   ```bash
   npm run dev
   ```

## Features

- Email input form (purpose, recipient, tone, key points)
- Tone selection (Professional, Friendly, Formal, Concise)
- AI-generated email via OpenRouter
- Copy to clipboard
- Fill sample data (classroom demo shortcut)
- Regenerate without clearing the form
