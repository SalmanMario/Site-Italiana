import { Routes, Route } from "react-router-dom";
import { route, routes } from "./index";
import { Verbs } from "../pages/Verbs";
import { Homepage } from "../pages/Homepage";
import { Applayout } from "../components/AppLayout";
import { Clothes } from "../pages/Clothes";

export function RoutesPages() {
  return (
    <Routes>
      <Route element={<Applayout />}>
        <Route path={route(routes.root)} element={<Homepage />} />
        <Route path={route(routes.verbs)} element={<Verbs />} />
        <Route path={route(routes.clothes)} element={<Clothes />} />
      </Route>
    </Routes>
  );
}
