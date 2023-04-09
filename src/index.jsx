import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./style.css";
import { Home } from "./Components/Home";
import { Articles } from "./Components/Articles";
import { Reviews } from "./Components/Reviews";
import { Movies } from "./Components/Movies";
import { Menu } from "./Components/Menu";
import { Movie } from "./Components/Movie";

const App = () => {
  return (
    <div className="container">
      <header></header>
      <main>
        <Menu />
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

const ErrorPage = () => {
  return (
    <main>
      <h2>404: Not found</h2>
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/movies",
        element: <Movies />,
        children: [
          {
            path: "/movies/:id",
            element: <Movie />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
