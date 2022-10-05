import "./App.css";
//import router from "./routes/routes";
import image from "./assets/images/controller.png";
import Layout from "./components/layout";
import Home from "./pages/home";
import AboutUs from "./pages/about-us/AboutUs";
import Categories from "./pages/categories/Categories";
import SignUp from "./pages/signup/SignUp";
import SingleItem from "./pages/singleitem/SingleItem";
import ContactUs from "./pages/contactus/ContactUs";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

function App() {
  const products = [
    {
      id:Math.floor(Math.random()*1000),
      image: image,
      name: "نام آیتم در دسته بندی",
      price: 22_000_000,
      onClick: () => {},
    },
    {
      id:Math.floor(Math.random()*1000),
      image: image,
      name: "نام آیتم در دسته بندی",
      price: 22_000_000,
      onClick: () => {},
    },
    {
      id:Math.floor(Math.random()*1000),
      image: image,
      name: "نام آیتم در دسته بندی",
      price: 22_000_000,
      onClick: () => {},
    },
    {
      id:Math.floor(Math.random()*1000),
      image: image,
      name: "نام آیتم در دسته بندی",
      price: 22_000_000,
      onClick: () => {},
    },
    {
      id:Math.floor(Math.random()*1000),
      image: image,
      name: "نام آیتم در دسته بندی",
      price: 22_000_000,
      onClick: () => {},
    },
    {
      id:Math.floor(Math.random()*1000),
      image: image,
      name: "نام آیتم در دسته بندی",
      price: 22_000_000,
      onClick: () => {},
    },
    {
      id:Math.floor(Math.random()*1000),
      image: image,
      name: "نام آیتم در دسته بندی",
      price: 22_000_000,
      onClick: () => {},
    },
    {
      id:Math.floor(Math.random()*1000),
      image: image,
      name: "نام آیتم در دسته بندی",
      price: 22_000_000,
      onClick: () => {},
    },
    {
      id:Math.floor(Math.random()*1000),
      image: image,
      name: "نام آیتم در دسته بندی",
      price: 22_000_000,
      onClick: () => {},
    },
    {
      id:Math.floor(Math.random()*1000),
      image: image,
      name: "نام آیتم در دسته بندی",
      price: 22_000_000,
      onClick: () => {},
    },
    {
      id:Math.floor(Math.random()*1000),
      image: image,
      name: "نام آیتم در دسته بندی",
      price: 22_000_000,
      onClick: () => {},
    },
  ];
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home products={products}/>,
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
          path: "descrption/:descrptionID",
          element: <SingleItem products={products} />,
        },
        {
          path: "contact-us",
          element: <ContactUs/>,
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
  return <RouterProvider router={router} />;
}

export default App;
