import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/locations/risk-of-rain-2',
      element: <LocationEvents location='Risk of Rain 2' locationName='Risk of Rain 2' />
    },
    {
      path: '/locations/elden-ring',
      element: <LocationEvents location='Elden Ring' locationName='Elden Ring' />
    },
    {
      path: '/locations/the-witcher-3',
      element: <LocationEvents location='The Witcher 3' locationName='The Witcher 3' />
    },
    {
      path: '/locations/final-fantasy',
      element: <LocationEvents location='Final Fantasy' locationName='Final Fantasy' />
    },
    {
      path: '/events',
      element: <Events />
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>BossGrid Plaza</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App