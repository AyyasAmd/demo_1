const OPENROUTER_API_URL =
  'https://openrouter.ai/api/v1/chat/completions'

export async function generateEmail({
  purpose,
  recipient,
  tone,
  keyPoints,
}) {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY

  if (!apiKey) {
    throw new Error(
      'OpenRouter API key is not configured. Add VITE_OPENROUTER_API_KEY to your .env file.'
    )
  }

  const prompt = `You are a professional email writing assistant.

Write an email based on these details:

Purpose: ${purpose}
Recipient: ${recipient}
Tone: ${tone}

Key points to include:
${keyPoints}

Requirements:
- Write a complete email with a subject line
- Match the ${tone} tone exactly
- Include all key points naturally
- Keep it readable and ready to copy with light editing
- Use "Subject:" for the subject line
- End with a simple sign-off like "[Your Name]"`

  const response = await fetch(OPENROUTER_API_URL, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      'HTTP-Referer': window.location.origin,
      'X-Title': 'AI Email Generator',
    },

    body: JSON.stringify({
      model: 'openrouter/free',

      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    }),
  })

  const data = await response.json()

  // Debug information
  console.log('OpenRouter status:', response.status)
  console.log(
    'OpenRouter response:',
    JSON.stringify(data, null, 2)
  )

  // Handle API/provider errors
  if (!response.ok) {
    throw new Error(
      data?.error?.message ||
      `OpenRouter request failed (${response.status})`
    )
  }

  // Handle missing choices
  if (!data?.choices?.[0]?.message?.content) {
    console.error(
      'Unexpected OpenRouter response:',
      data
    )

    throw new Error(
      'OpenRouter did not return generated email content.'
    )
  }

  return data.choices[0].message.content
}