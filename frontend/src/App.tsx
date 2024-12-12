import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "@/components/auth/PrivateRoute";
import { LoginForm } from "@/components/auth/LoginForm";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <div>Защищенная главная страница</div>
                    </PrivateRoute>
                }
            />
            {/* Другие защищенные маршруты */}
        </Routes>
    );
}

export default App;
