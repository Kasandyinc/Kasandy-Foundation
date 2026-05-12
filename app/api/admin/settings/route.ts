import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { currentPassword, newPassword } = await req.json()
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword || currentPassword !== adminPassword) {
    return NextResponse.json({ error: 'Current password is incorrect.' }, { status: 401 })
  }

  if (!newPassword || newPassword.length < 8) {
    return NextResponse.json({ error: 'New password must be at least 8 characters.' }, { status: 400 })
  }

  // Password is managed via Vercel env vars — this endpoint just validates
  // and reminds the user to update ADMIN_PASSWORD in Vercel.
  return NextResponse.json({
    success: true,
    message: 'Verified. Update ADMIN_PASSWORD in Vercel Environment Variables to make permanent.',
  })
}
