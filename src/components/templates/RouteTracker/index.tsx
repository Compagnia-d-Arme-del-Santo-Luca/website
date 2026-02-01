import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

/**
 * Route tracking component that wraps all routes and includes analytics page tracking
 */
const RouteTracker = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <Outlet />
}

export default RouteTracker
