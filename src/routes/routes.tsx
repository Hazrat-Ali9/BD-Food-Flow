import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../components/layouts/AdminLayout";
import AddSuppliesProducts from "../components/pages/Admin/AddSuppliesProducts/AddSuppliesProducts";
import Dashboard from "../components/pages/Admin/Dashboard/Dashboard";
import Home from "../components/pages/Home/Home";
import ProductDetails from "../components/pages/Home/OurProducts/ProductDetails";
import Register from "../components/pages/Register/Register";
import AllSuppliesProducts from "./../components/pages/Admin/AllSuppliesProducts/AllSuppliesProducts";
import AllSupplies from "./../components/pages/AllSupplies/AllSupplies/index";
import Contact from "./../components/pages/Contact/Contact/index";
import Login from "./../components/pages/Login/Login";
import PrivetRoute from "./PrivetRoute";
import CreateTestimonial from "../components/pages/Admin/CreateTestimonial/CreateTestimonial";
import Volunteer from "../components/pages/Volunteer/Volunteer/Volunteer";
import OurVolunteers from "../components/pages/AboutUs/OurVolunteers/OurVolunteers";
import Leaderboard from "./../components/pages/Leaderboard/Leaderboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-supplies",
        element: <AllSupplies />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about-us",
        element: <OurVolunteers />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "volunteer",
        element: (
          <PrivetRoute>
            <Volunteer />
          </PrivetRoute>
        ),
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  // admin

  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <AdminLayout />
      </PrivetRoute>
    ),

    children: [
      // {
      //   index: true,
      //   element: <Navigate to="/dashboard" />,
      // },
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/supplies",
        element: <AllSuppliesProducts />,
      },
      {
        path: "/dashboard/create-supply",
        element: <AddSuppliesProducts />,
      },
      {
        path: "/dashboard/create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },
]);

export default router;
