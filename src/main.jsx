import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import ShowCase from "./pages/ShowCase.jsx";
import Footer from "./components/Footer.jsx";
const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar></Navbar> <Home></Home>
        <Footer />
      </>
    ),

    errorElement: (
      <>
        <Navbar></Navbar> <PageNotFound></PageNotFound>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/works",
    element: (
      <>
        <Navbar />
        <ShowCase />
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer></Footer>
      </>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
