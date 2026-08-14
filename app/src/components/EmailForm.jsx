const TONE_OPTIONS = ['Professional', 'Friendly', 'Formal', 'Concise']

const inputClassName =
  'w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200'

export default function EmailForm({
  formData,
  onChange,
  onSubmit,
  onFillSample,
  isLoading,
  validationError,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onFillSample}
          disabled={isLoading}
          className="text-sm font-medium text-blue-600 transition hover:text-blue-700 disabled:text-blue-300"
        >
          Fill sample data
        </button>
      </div>
      <div>
        <label htmlFor="purpose" className="mb-1 block text-sm font-medium text-slate-700">
          Email purpose <span className="text-red-500">*</span>
        </label>
        <input
          id="purpose"
          name="purpose"
          type="text"
          value={formData.purpose}
          onChange={onChange}
          placeholder="e.g. Request feedback on a project proposal"
          className={inputClassName}
          disabled={isLoading}
        />
      </div>

      <div>
        <label htmlFor="recipient" className="mb-1 block text-sm font-medium text-slate-700">
          Recipient <span className="text-red-500">*</span>
        </label>
        <input
          id="recipient"
          name="recipient"
          type="text"
          value={formData.recipient}
          onChange={onChange}
          placeholder="e.g. Jordan Lee, Product Manager"
          className={inputClassName}
          disabled={isLoading}
        />
      </div>

      <div>
        <label htmlFor="tone" className="mb-1 block text-sm font-medium text-slate-700">
          Tone <span className="text-red-500">*</span>
        </label>
        <select
          id="tone"
          name="tone"
          value={formData.tone}
          onChange={onChange}
          className={inputClassName}
          disabled={isLoading}
        >
          {TONE_OPTIONS.map((tone) => (
            <option key={tone} value={tone}>
              {tone}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="keyPoints" className="mb-1 block text-sm font-medium text-slate-700">
          Key points <span className="text-red-500">*</span>
        </label>
        <textarea
          id="keyPoints"
          name="keyPoints"
          value={formData.keyPoints}
          onChange={onChange}
          rows={4}
          placeholder="List the important facts or requests to include"
          className={inputClassName}
          disabled={isLoading}
        />
      </div>

      {validationError && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {validationError}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
      >
        {isLoading ? 'Generating...' : 'Generate Email'}
      </button>
    </form>
  )
}
