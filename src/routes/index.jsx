import { element } from "prop-types";
import { lazy } from "react";
const Home = lazy(() => import("@/pages/Home.jsx"));
const BrowseInterships = lazy(() => import("@/pages/BrowseInterships.jsx"));
const MyApplications = lazy(() => import("@/pages/MyApplications.jsx"));
const Settings = lazy(() => import("@/pages/Settings.jsx"));
const Login = lazy(() => import("@/pages/Login.jsx"));
const StudentsList = lazy(() => import("@/pages/StudentsList.jsx"));
const Recommandation = lazy(() => import("@/pages/Recommandation.jsx"));
const Entreprises = lazy(() => import("@/pages/Entreprises.jsx"));
const IntershipsOffers = lazy(() => import("@/pages/IntershipsOffers.jsx"));
const Applicant = lazy(() => import("@/pages/Applicant.jsx"));
const RhStatistics = lazy(() => import("@/pages/RhStatistics.jsx"));

const mainRoutes = [
  { path: "/", element: Home, isPotected: false },
  { path: "/login", element: Login, isPotected: false },
  {
    path: "/settings",
    element: Settings,
    isPotected: false,
    roles: ["Student"],
  },
  {
    path: "/browse-interships",
    element: BrowseInterships,
    isProtected: false,
    roles: ["Student"],
  },
  {
    path: "/my-applications",
    element: MyApplications,
    isProtected: false,
    roles: ["Student"],
  },
  {
    path: "/students-list",
    element: StudentsList,
    isProtected: false,
    roles: ["Student"],
  },
  {
    path: "/recommendations",
    element: Recommandation,
    isProtected: false,
    roles: ["Student"],
  },
  {
    path: "/entreprises",
    element: Entreprises,
    isProtected: false,
    roles: ["Student"],
  },
  {
    path: "/interships-offers",
    element: IntershipsOffers,
    isProtected: false,
    roles: ["Student"],
  },
  {
    path: "/applicant",
    element: Applicant,
    isProtected: false,
    roles: ["Student"],
  },
  {
    path: "/statistics",
    element: RhStatistics,
    isProtected: false,
    roles: ["Student"],
  },
];
export default mainRoutes;
