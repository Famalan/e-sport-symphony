import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { Home } from "../pages/Home";

export function Routes() {
    return (
        <RouterRoutes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/*"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
        </RouterRoutes>
    );
}
