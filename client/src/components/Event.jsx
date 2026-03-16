import React, { useState, useEffect } from 'react'
import '../css/Event.css'

const Event = (props) => {
    const fallbackImage = `https://placehold.co/600x450/1f2937/ffffff?text=${encodeURIComponent(props.title || 'Boss')}`
    const [dateq, setDateq] = useState('')
    const [color2, setColor2] = useState('')
    const [liveCountdown, setLiveCountdown] = useState('')

    useEffect(() => {
        if (!props.date) {
            setDateq('')
            setColor2('')
            setLiveCountdown('')
            return
        }

        const eventDate = new Date(props.date)
        if (Number.isNaN(eventDate.getTime())) {
            setDateq('Invalid date')
            setColor2('gray')
            setLiveCountdown('')
            return
        }

        const formatTimeLeft = (msRemaining) => {
            const totalSeconds = Math.floor(msRemaining / 1000)
            const days = Math.floor(totalSeconds / 86400)
            const hours = Math.floor((totalSeconds % 86400) / 3600)
            const minutes = Math.floor((totalSeconds % 3600) / 60)
            const seconds = totalSeconds % 60

            return `${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`
        }

        const updateCountdown = () => {
            const now = new Date()
            const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
            const eventDayStart = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate())

            if (eventDayStart.getTime() === todayStart.getTime()) {
                setDateq('Happening now!')
                setColor2('limegreen')
                setLiveCountdown('0d 00h 00m 00s')
                return
            }

            if (eventDayStart < todayStart) {
                setDateq('Already happened')
                setColor2('crimson')
                setLiveCountdown('Countdown finished')
                return
            }

            setDateq('Will happen later')
            setColor2('dodgerblue')
            setLiveCountdown(formatTimeLeft(eventDayStart.getTime() - now.getTime()))
        }

        updateCountdown()
        const intervalId = setInterval(updateCountdown, 1000)

        return () => clearInterval(intervalId)
    }, [props.date])

    return (
        <article className='event-information'>
            {props.image && (
                <img
                    src={props.image}
                    alt={props.title || 'Dungeon image'}
                    onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = fallbackImage
                    }}
                />
            )}

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{props.title || 'Unknown Dungeon'}</h3>
                    <p>
                        <i className="fa-solid fa-layer-group"></i> Level: {props.level}
                        <br />
                        {props.date}
                        <br />
                        
                    </p>
                    <p style={{ color: color2 }}>
                        {props.date && dateq ? dateq : null}
                         <span className='line'></span>
                        
                    </p>
                    <p><span style={{ color: color2 }}>{liveCountdown}</span></p>
                    {props.description && <p>{props.description}</p>}
                    <p>Health: {props.health} | Attack: {props.attack}</p>
                </div>
            </div>
        </article>
    )
}

export default Event