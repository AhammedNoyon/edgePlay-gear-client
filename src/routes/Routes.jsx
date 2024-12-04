import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddEquipment from "../pages/AddEquipment";
import AllEquipment from "../pages/AllEquipment";
import MyEquipment from "../pages/MyEquipment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h3>Error</h3>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addEquipment",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "/allEquipment",
        element: <AllEquipment></AllEquipment>,
      },
      {
        path: "/myEquipment",
        element: <MyEquipment></MyEquipment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
