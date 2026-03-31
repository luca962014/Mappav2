import { getStore } from '@netlify/blobs'

const store = getStore('kingshot-planner-v9')
const KEY = 'layout'
const jsonResponse = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*', 'access-control-allow-methods': 'GET,POST,OPTIONS', 'access-control-allow-headers': 'Content-Type,x-editor-key' } })
export default async (request) => {
 if (request.method === 'OPTIONS') return new Response(undefined, { status:204, headers:{ 'access-control-allow-origin': '*', 'access-control-allow-methods': 'GET,POST,OPTIONS', 'access-control-allow-headers': 'Content-Type,x-editor-key' } })
 if (request.method === 'GET') { const data = await store.get(KEY, { type:'json' }); return jsonResponse(data || { slots: [], updatedAt: null }) }
 if (request.method === 'POST') {
  const requiredKey = process.env.EDITOR_KEY || ''
  const providedKey = request.headers.get('x-editor-key') || ''
  if (requiredKey && providedKey !== requiredKey) return jsonResponse({ error:'Editor key non valida.' }, 401)
  const payload = await request.json()
  const state = { slots: Array.isArray(payload?.slots) ? payload.slots : [], updatedAt: new Date().toISOString() }
  await store.setJSON(KEY, state, { consistency:'strong' })
  return jsonResponse(state)
 }
 return jsonResponse({ error:'Metodo non supportato.' }, 405)
}
