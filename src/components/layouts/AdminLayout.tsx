import { Outlet } from 'react-router-dom'
import Sidebar from '../pages/Admin/Sidebar/Sidebar'

const AdminLayout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full md:px-6 px-3 h-[200vh]">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AdminLayout
