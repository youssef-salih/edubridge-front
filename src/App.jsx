import { Route, Routes } from "react-router";

import Dashboard from "./layouts/Dashboard";
import mainRoutes from "./routes";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        {mainRoutes.map((route) => {
          const { path, element: Element, isProtected } = route;
          return <Route key={path} path={path} element={<Element />} />;
        })}
      </Route>
      <Route path="*" element={<Page404/>} />
    </Routes>
  );
}

export default App;
