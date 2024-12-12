import { create } from "zustand";
import { User } from "@/types";
import { apiClient } from "@/lib/apiClient";

interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    checkAuth: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
    user: null,
    isLoading: true,
    error: null,
    isAuthenticated: false,

    login: async (email: string, password: string) => {
        try {
            set({ isLoading: true, error: null });
            const { data } = await apiClient.post("/auth/login", {
                email,
                password,
            });
            localStorage.setItem("token", data.access_token);
            set({ user: data.user, isAuthenticated: true });
        } catch (error) {
            set({ error: "Ошибка авторизации" });
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },

    logout: () => {
        localStorage.removeItem("token");
        set({ user: null, isAuthenticated: false });
    },

    checkAuth: async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            set({ isLoading: false, isAuthenticated: false });
            return;
        }

        try {
            set({ isLoading: true, error: null });
            const { data } = await apiClient.get("/auth/me");
            set({ user: data, isAuthenticated: true });
        } catch (error) {
            set({ user: null, isAuthenticated: false });
            localStorage.removeItem("token");
        } finally {
            set({ isLoading: false });
        }
    },
}));

// Проверяем аутентификацию при инициализации только если есть токен
if (localStorage.getItem("token")) {
    useAuth.getState().checkAuth();
} else {
    useAuth.setState({ isLoading: false });
}