import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserinfo } from '../services/auth.services'

interface Props {
  children: ReactNode
}

const PrivateRoute = ({ children }: Props) => {
  const userInfo = getUserinfo()
  // const { auth, initialized } = useAuth()
  const location = useLocation()

  // if (!initialized) {
  //   return <p>Loading...</p>
  // }

  if (userInfo) {
    return <>{children}</>
  }

  return <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRoute
