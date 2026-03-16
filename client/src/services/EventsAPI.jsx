const API_BASE = '/api/dungeons'

const getAllEvents = async () => {
  const res = await fetch(API_BASE)
  if (!res.ok) throw new Error(`Failed to fetch events: ${res.status}`)
  return res.json()
}

const getEventById = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`)
  if (!res.ok) throw new Error(`Failed to fetch event ${id}: ${res.status}`)
  return res.json()
}

const EventsAPI = {
  getAllEvents,
  getEventById
}

export default EventsAPI