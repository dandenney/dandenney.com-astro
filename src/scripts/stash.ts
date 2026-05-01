interface StashLink {
  url: string
  title: string
  notes: string | null
  media_type: 'article' | 'video'
  shared_at: string
}

export interface LibraryLink {
  created: Date
  notes?: string
  tag: 'Read' | 'Watched'
  title: string
  url: string
}

const SUPABASE_URL = import.meta.env.STASH_SUPABASE_URL as string
const SUPABASE_SERVICE_KEY = import.meta.env.STASH_SUPABASE_SERVICE_KEY as string
const USER_ID = '2707742d-e22f-4649-aeea-aee83f243753'

export async function getSharedLinks(month?: string): Promise<LibraryLink[]> {
  try {
    const targetMonth = month ?? new Date().toISOString().slice(0, 7)
    const [year, mon] = targetMonth.split('-').map(Number)
    const nextYear = mon === 12 ? year + 1 : year
    const nextMon = mon === 12 ? 1 : mon + 1
    const rangeStart = `${targetMonth}-01T00:00:00.000Z`
    const rangeEnd = `${nextYear}-${String(nextMon).padStart(2, '0')}-01T00:00:00.000Z`

    const url = `${SUPABASE_URL}/rest/v1/links?user_id=eq.${USER_ID}&is_shared=eq.true&status=eq.stashed&shared_at=gte.${rangeStart}&shared_at=lt.${rangeEnd}&select=url,title,notes,media_type,shared_at&order=shared_at.asc`

    const response = await fetch(url, {
      headers: {
        apikey: SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
    })

    if (!response.ok) {
      throw new Error(`Stash query failed: ${response.status}`)
    }

    const data: StashLink[] = await response.json()

    return data.map((link) => ({
      created: new Date(link.shared_at),
      notes: link.notes ?? undefined,
      tag: link.media_type === 'video' ? 'Watched' : 'Read',
      title: link.title,
      url: link.url,
    }))
  } catch (error) {
    console.error('Error fetching stash links:', error)
    return []
  }
}
