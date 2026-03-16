import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import '../css/LocationEvents.css'

const LocationEvents = ({ location, locationName }) => {
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                setError('')

                const allDungeons = await EventsAPI.getAllEvents()
                const matchingDungeons = allDungeons.filter((dungeon) => dungeon.location === location)
                setEvents(matchingDungeons)
            }
            catch (err) {
                setError('Could not load dungeon details right now.')
            }
            finally {
                setLoading(false)
            }
        }) ()
    }, [location])

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    {events[0]?.image && <img src={events[0].image} alt={locationName} />}
                </div>

                <div className='location-info'>
                    <h2>{locationName}</h2>
                    <p>{events.length} game{events.length === 1 ? '' : 's'} in this location</p>
                </div>
            </header>

            <main>
                {loading && <h2>Loading dungeon...</h2>}
                {!loading && error && <h2>{error}</h2>}
                {
                    !loading && !error && events && events.length > 0 ? events.map((event) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.name}
                            level={event.level}
                            date={event.date}
                            time={event.type}
                            image={event.image}
                            description={event.description}
                            health={event.health}
                            attack={event.attack}
                        />
                    ) : !loading && !error ? <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2> : null
                }
            </main>
        </div>
    )
}

export default LocationEvents