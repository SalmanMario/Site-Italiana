import { Routes, Route } from "react-router-dom";
import { route, routes } from "./index";
import {Verbs} from "../pages/verbs";
import { Homepage } from "../pages/Homepage";

export function RoutesPages() {
  return (
      <Routes>
        <Route>
            <Route path={route(routes.root)} element={<Homepage/>}></Route>
            <Route path={route(routes.verbs)} element={<Verbs/>}></Route>
        </Route>
      </Routes>
  );
}
