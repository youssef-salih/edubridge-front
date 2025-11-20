import { lazy } from "react";
const Home = lazy(() => import("@/pages/Home.jsx"));
const Login = lazy(() => import("@/pages/Login.jsx"));
const mainRoutes = [
  { path: "/", element: Home, isPotected: false },
  { path: "/login", element: Login, isPotected: false },
];
export default mainRoutes;
