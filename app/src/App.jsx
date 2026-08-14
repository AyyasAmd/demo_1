import { useState } from 'react'
import EmailForm from './components/EmailForm'
import EmailOutput from './components/EmailOutput'
import { generateEmail } from './services/openRouter'

const initialFormData = {
  purpose: '',
  recipient: '',
  tone: 'Professional',
  keyPoints: '',
}

const sampleFormData = {
  purpose: 'Request feedback on a project proposal',
  recipient: 'Jordan Lee, Product Manager',
  tone: 'Professional',
  keyPoints:
    '- Proposal ready for review\n- Feedback needed by Friday\n- Happy to walk through it in a short call',
}

function validateForm(formData) {
  if (!formData.purpose.trim()) {
    return 'Please enter the email purpose.'
  }
  if (!formData.recipient.trim()) {
    return 'Please enter the recipient.'
  }
  if (!formData.tone.trim()) {
    return 'Please select a tone.'
  }
  if (!formData.keyPoints.trim()) {
    return 'Please enter the key points.'
  }
  return ''
}

export default function App() {
  const [formData, setFormData] = useState(initialFormData)
  const [generatedEmail, setGeneratedEmail] = useState('')
  const [validationError, setValidationError] = useState('')
  const [generationError, setGenerationError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copyStatus, setCopyStatus] = useState('idle')

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setValidationError('')
    setGenerationError('')
  }

  async function runGeneration() {
    const error = validateForm(formData)
    if (error) {
      setValidationError(error)
      return
    }

    setIsLoading(true)
    setGenerationError('')
    setCopyStatus('idle')

    try {
      const email = await generateEmail(formData)
      setGeneratedEmail(email)
    } catch (error) {
      setGeneratedEmail('')
      setGenerationError(error.message || 'Failed to generate email. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    runGeneration()
  }

  function handleFillSample() {
    setFormData(sampleFormData)
    setValidationError('')
    setGenerationError('')
    setCopyStatus('idle')
  }

  async function handleCopy() {
    if (!generatedEmail) return

    try {
      await navigator.clipboard.writeText(generatedEmail)
      setCopyStatus('copied')
      setTimeout(() => setCopyStatus('idle'), 2000)
    } catch {
      setGenerationError('Could not copy to clipboard. Please copy manually.')
    }
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            AI Email Generator
          </h1>
          <p className="mt-1 text-slate-600">
            Turn structured inputs into a professional email draft ready to copy.
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-6 px-4 py-8 lg:grid-cols-2">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Email Details</h2>
          <EmailForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onFillSample={handleFillSample}
            isLoading={isLoading}
            validationError={validationError}
          />
          {generationError && (
            <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
              {generationError}
            </p>
          )}
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Generated Email</h2>
          <EmailOutput
            email={generatedEmail}
            onCopy={handleCopy}
            onRegenerate={runGeneration}
            copyStatus={copyStatus}
            isLoading={isLoading}
          />
        </section>
      </main>
    </div>
  )
}
