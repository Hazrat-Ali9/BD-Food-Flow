import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
// import { Toaster } from 'sonner'
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "sonner";
import "./index.css";
import { store } from "./redux/store";
import router from "./routes/routes";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <AuthProvider> */}
      <div className="bg-[#ffffff] dark:bg-black dark:text-white ">
        <RouterProvider router={router} />
        <ToastContainer />
        {/* <Toaster position="top-right" /> */}
        <Toaster position="top-right" />
      </div>
      {/* </AuthProvider> */}
    </Provider>
  </React.StrictMode>
);
