const API_BASE = '/api/dungeons'

const getAllLocations = async () => {
  const res = await fetch(API_BASE)
  if (!res.ok) throw new Error(`Failed to fetch locations: ${res.status}`)
  return res.json()
}

const getLocationById = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`)
  if (!res.ok) throw new Error(`Failed to fetch location ${id}: ${res.status}`)
  return res.json()
}

const LocationsAPI = {
  getAllLocations,
  getLocationById
}

export default LocationsAPI