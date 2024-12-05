import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddEquipment from "../pages/AddEquipment";
import AllEquipment from "../pages/AllEquipment";
import MyEquipment from "../pages/MyEquipment";
import SecureRoute from "../secure/SecureRoute";
import EquipmentDetails from "../pages/EquipmentDetails";

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
        path: "/allEquipment",
        element: <AllEquipment></AllEquipment>,
      },
      {
        path: "/addEquipment",
        element: (
          <SecureRoute>
            <AddEquipment></AddEquipment>
          </SecureRoute>
        ),
      },
      {
        path: "/myEquipment",
        element: (
          <SecureRoute>
            <MyEquipment></MyEquipment>
          </SecureRoute>
        ),
      },
      {
        path: "/equipmentDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipments/${params.id}`),
        element: (
          <SecureRoute>
            <EquipmentDetails></EquipmentDetails>
          </SecureRoute>
        ),
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
