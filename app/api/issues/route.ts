import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { createIssueSchema } from '@/lib/validationSchemas'

export async function POST(request: Request) {
  const body = await request.json()
  const validation = createIssueSchema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 })
  }

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  })

  return NextResponse.json(newIssue, { status: 201 })
}

export async function GET(request: Request) {
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
}
