export default function EmailOutput({
  email,
  onCopy,
  onRegenerate,
  copyStatus,
  isLoading,
}) {
  if (!email) {
    return (
      <div className="flex min-h-64 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-slate-500">
        Your generated email will appear here.
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-900">Email Draft</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onRegenerate}
            disabled={isLoading}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? 'Generating...' : 'Regenerate'}
          </button>
          <button
            type="button"
            onClick={onCopy}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            {copyStatus === 'copied' ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <pre className="whitespace-pre-wrap rounded-lg bg-slate-50 p-4 text-sm leading-relaxed text-slate-800">
        {email}
      </pre>
    </div>
  )
}
