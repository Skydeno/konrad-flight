import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import { RoutesEnum } from "./enums/routes.enum";
import { Airlines } from "./features/Airlines/Airlines";
import { Login } from "./features/LogIn/Login";

export const createRoutes = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route path={RoutesEnum.HOME} element={<App />}>
        <Route path={RoutesEnum.AIRLINES} element={<Airlines />} />
        <Route path={RoutesEnum.LOGIN} element={<Login />} />
      </Route>
    )
  );
