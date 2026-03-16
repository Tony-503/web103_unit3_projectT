import React from 'react'
import { useRoutes, Link, useNavigate, useLocation } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import './App.css'

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()

  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/locations',
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
      path: '/locations/breath-of-the-wild',
      element: <LocationEvents location='Breath of the Wild' locationName='Breath of the Wild' />
    },
    {
      path: '/locations/zelda',
      element: <LocationEvents location='Zelda' locationName='Zelda' />
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
        <div>
          <select
            value={location.pathname === '/events' ? '/' : location.pathname}
            onChange={(e) => navigate(e.target.value)}
          >
            <option value="/">All Locations</option>
            <option value="/locations/risk-of-rain-2">Risk of Rain 2</option>
            <option value="/locations/elden-ring">Elden Ring</option>
            <option value="/locations/the-witcher-3">The Witcher 3</option>
            <option value="/locations/final-fantasy">Final Fantasy</option>
            <option value="/locations/breath-of-the-wild">Breath of the Wild</option>
            <option value="/locations/zelda">Zelda</option>
          </select>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App