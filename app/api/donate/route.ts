import { NextRequest, NextResponse } from 'next/server'
import { SquareClient, SquareEnvironment } from 'square'
import { randomUUID } from 'crypto'

const client = new SquareClient({
  token: process.env.SQUARE_ACCESS_TOKEN!,
  environment: SquareEnvironment.Sandbox,
})

export async function POST(req: NextRequest) {
  try {
    const { token, amount, fund, frequency } = await req.json()

    if (!token || !amount || amount < 100) {
      return NextResponse.json({ error: 'Invalid payment details.' }, { status: 400 })
    }

    const response = await client.payments.create({
      sourceId: token as string,
      idempotencyKey: randomUUID(),
      amountMoney: {
        amount: BigInt(amount),
        currency: 'CAD',
      },
      locationId: process.env.SQUARE_LOCATION_ID!,
      note: `Kasandy Foundation – ${fund} fund (${frequency})`,
    })

    if (response.payment?.status === 'COMPLETED') {
      return NextResponse.json({ success: true, paymentId: response.payment.id })
    }

    return NextResponse.json({ error: 'Payment not completed.' }, { status: 400 })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Server error.'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
