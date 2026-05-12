export const dynamic = 'force-dynamic'

import { notFound } from 'next/navigation'
import { getPageById } from '@/lib/page-content'
import { getPageContent } from '@/lib/admin-kv'
import ContentEditor from './ContentEditor'

export default async function ContentEditorPage({ params }: { params: { page: string } }) {
  const pageDef = getPageById(params.page)
  if (!pageDef) notFound()

  const overrides = await getPageContent(params.page)

  return <ContentEditor pageDef={pageDef} overrides={overrides} />
}
