export const dynamic = 'force-dynamic'

import { Heart } from 'lucide-react'

export default async function DonationsPage() {
  // Fetch from Square Orders API
  let donations: Array<{
    id: string
    amount: number
    currency: string
    status: string
    createdAt: string
    buyerEmail?: string
    note?: string
  }> = []
  let error = ''

  try {
    const token = process.env.SQUARE_ACCESS_TOKEN
    const locationId = process.env.SQUARE_LOCATION_ID

    if (token && locationId) {
      const res = await fetch(`https://connect.squareup.com/v2/orders/search`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Square-Version': '2024-01-18',
        },
        body: JSON.stringify({
          location_ids: [locationId],
          query: { sort: { sort_field: 'CREATED_AT', sort_order: 'DESC' } },
          limit: 50,
        }),
      })

      if (res.ok) {
        const data = await res.json()
        donations = (data.orders ?? []).map((o: Record<string, unknown>) => ({
          id: o.id as string,
          amount: ((o.total_money as Record<string, unknown>)?.amount as number ?? 0) / 100,
          currency: ((o.total_money as Record<string, unknown>)?.currency as string) ?? 'CAD',
          status: o.state as string,
          createdAt: o.created_at as string,
          buyerEmail: (o.fulfillments as Array<Record<string, unknown>>)?.[0]
            ?.pickup_details
            ? undefined
            : undefined,
        }))
      } else {
        error = `Square API error: ${res.status}`
      }
    } else {
      error = 'Square credentials not configured.'
    }
  } catch (e) {
    error = String(e)
  }

  const total = donations.reduce((sum, d) => sum + d.amount, 0)
  const completed = donations.filter(d => d.status === 'COMPLETED')

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Donations</h1>
        <p className="text-sm text-gray-500 mt-1">Square payment history for kasandyfoundation.org</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Total Orders', value: donations.length },
          { label: 'Completed', value: completed.length },
          { label: 'Total Revenue', value: `$${total.toFixed(2)} CAD` },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg border border-gray-200 p-5">
            <p className="text-2xl font-semibold text-gray-900">{s.value}</p>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {error && (
        <div className="mb-4 px-4 py-3 bg-amber-50 border border-amber-200 rounded text-sm text-amber-700">
          {error}
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {donations.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <Heart size={32} className="mx-auto text-gray-200 mb-3" />
            <p className="text-sm text-gray-400">No donations found yet.</p>
            <p className="text-xs text-gray-300 mt-1">
              {error ? 'Check Square credentials in Vercel env vars.' : 'Donations will appear here once they come in.'}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wide">
              <span>Order ID</span>
              <span>Amount</span>
              <span>Status</span>
              <span className="text-right">Date</span>
            </div>
            <div className="divide-y divide-gray-50">
              {donations.map(d => (
                <div key={d.id} className="grid grid-cols-4 px-6 py-3 text-sm items-center">
                  <span className="font-mono text-xs text-gray-500 truncate">{d.id.slice(0, 16)}…</span>
                  <span className="font-medium text-gray-900">${d.amount.toFixed(2)} {d.currency}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full w-fit ${
                    d.status === 'COMPLETED'
                      ? 'bg-green-50 text-green-700'
                      : d.status === 'CANCELED'
                      ? 'bg-red-50 text-red-700'
                      : 'bg-gray-50 text-gray-600'
                  }`}>
                    {d.status}
                  </span>
                  <span className="text-xs text-gray-400 text-right">
                    {new Date(d.createdAt).toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
