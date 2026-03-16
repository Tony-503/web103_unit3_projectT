import React, { useEffect, useState } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import '../css/Events.css'

const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError('')
        const data = await EventsAPI.getAllEvents()
        setEvents(data)
      } catch (err) {
        setError('Could not load events right now.')
      } finally {
        setLoading(false)
      }
    })()
  }, [])


  const filteredEvents = events.filter((event) =>
    searchTerm === '' || String(event.level) === searchTerm

  )

  
  const levelColorMap = {
    '5': 'green',
    '10': 'blue',
    '15': 'goldenrod',
    '20': 'orange',
    '25': 'red',
    '30': 'purple',
    '35': 'deeppink'
  }

  const selectedLevelColor = levelColorMap[searchTerm] || 'inherit'

    

  return (
    <section className='events-page ' >
      <h2>All Events</h2>
      <div className='search-bar'>
        <label className="form-label" htmlFor="level-select" style={{ color: selectedLevelColor }}>Level: {searchTerm || 'All'}</label>
        <select
          id="level-select"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        >
          <option value="">All</option>
          <option value="5">lv5</option>
          <option value="10">lv10</option>
          <option value="15">lv15</option>
          <option value="20">lv20</option>
          <option value="25">lv25</option>
          <option value="30">lv30</option>
          <option value="35">lv35</option>
        </select>
      </div>
      {loading && <p>Loading events...</p>}
      {!loading && error && <p>{error}</p>}

      {!loading && !error && filteredEvents.length === 0 && <p>No events found.</p>}

      {!loading && !error && filteredEvents.length > 0 && (
        <div className='events-grid'>
          {filteredEvents.map((event) => (
            <Event
              
              key={event.id}
              id={event.id}
              title={event.name}
              date={event.date}
              level={event.level}
              type={event.type}
              image={event.image}
              description={event.description}
              health={event.health}
              attack={event.attack}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Events