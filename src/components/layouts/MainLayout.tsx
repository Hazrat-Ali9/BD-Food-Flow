import { Outlet } from 'react-router-dom'
import Footer from '../../shared/Footer/Footer'
import Navbar from '../../shared/Navbar/Navbar'
// main layout
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
