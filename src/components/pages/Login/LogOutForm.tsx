import { Link, useNavigate } from 'react-router-dom'
import { getUserinfo, removeUser } from '../../../services/auth.services'

// Logout component for user logout functionality
const Logout = () => {
  const navigate = useNavigate()
  const userInfo = getUserinfo()

  // Function to handle user logout
  const handleLogout = () => {
    removeUser()
    // Clear authentication state

    navigate('/login') // Redirect to login page after logout
  }

  return (
    <>
      {userInfo?.email ? (
        <button
          className=" bg-[#023e8a] cursor-pointer text-white md:ml-8 font-semibold px-4 py-2 rounded duration-500 md:static"
          onClick={handleLogout}
        >
          LogOut
        </button>
      ) : (
        <Link to="/login">
          <button className=" bg-[#023e8a] cursor-pointer text-white md:ml-8 font-semibold px-4 py-2 rounded duration-500 md:static">
            Login
          </button>
        </Link>
      )}
    </>
  )
}

export default Logout
