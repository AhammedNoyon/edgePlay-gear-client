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
import UpdateEquipment from "../pages/UpdateEquipment";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allEquipment",
        element: <AllEquipment></AllEquipment>,
        loader: () =>
          fetch("https://latest-sports-equipment-zone.vercel.app/equipments"),
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
        path: "/updateEquipment/:id",
        element: (
          <SecureRoute>
            <UpdateEquipment></UpdateEquipment>
          </SecureRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://latest-sports-equipment-zone.vercel.app/equipments/${params.id}`
          ),
      },
      {
        path: "/myEquipment",
        element: (
          <SecureRoute>
            <MyEquipment></MyEquipment>
          </SecureRoute>
        ),
        loader: () =>
          fetch("https://latest-sports-equipment-zone.vercel.app/equipments"),
      },
      {
        path: "/equipmentDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://latest-sports-equipment-zone.vercel.app/equipments/${params.id}`
          ),
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
