import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AboutUs from "../pages/about-us/AboutUs";
import Categories from "../pages/categories/Categories";
import Layout from "../components/layout";
import SignUp from "../pages/signup/SignUp";
import SingleItem from "../pages/singleitem/SingleItem";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "categories/:categoryID",
        element: <Categories />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "descrption",
        element: <SingleItem />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <Layout2 />,
  //   children: [
  //     {
  //       path: "login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "register",
  //       element: <Register />,
  //     },
  //   ],
  // },
]);

export default router;
