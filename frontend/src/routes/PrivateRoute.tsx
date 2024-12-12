import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface PrivateRouteProps {
    component: React.ComponentType<any>;
} // добавлена закрывающая скобка

export function PrivateRoute({ children }: PrivateRouteProps) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
}

export default PrivateRoute; // добавлен экспорт по умолчанию
