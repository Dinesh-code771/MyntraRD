import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Settings from "./components/Settings";
import HomeSection from "./components/HomeSection";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Beauty from "./components/Beauty";
import Living from "./components/Living";
import { Auth0Provider } from "@auth0/auth0-react";
import Login from "./components/Login";
import ProtectRouter from "./components/ProtectRouter";
import ProductCategory from "./components/ProductCategory";
import ProductCategoryWrapper from "./components/ProductCategoryWrapper";
import WishList from "./components/WishList";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectRouter>
        <App />
      </ProtectRouter>
    ),

    children: [
      {
        path: "/",
        element: <HomeSection />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/beauty",
        element: <Beauty />,
      },
      {
        path: "/living",
        element: <Living />,
      },
      {
        path: "/category/:name",
        element: <ProductCategoryWrapper />,
      },
      {
        path: "/wishlist",
        element: <ProtectRouter>{<WishList />}</ProtectRouter>,
      },
    ],
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/login",
    element: <ProtectRouter>{<Login />}</ProtectRouter>,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-tresq8jdl7pjothi.us.auth0.com"
        clientId="dNVynycykrU9R2PpJIkcH6KHAtjUCm5g"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
