import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/api/client";
import { useAuth } from "./useAuth";

interface Member {
    id: number;
    username: string;
    email: string;
    role: string;
}

interface Team {
    id: number;
    name: string;
    description: string;
    captain_id: number;
    members: Member[];
}

export const useTeams = () => {
    const queryClient = useQueryClient();
    const { user } = useAuth();

    const {
        data: teams,
        isLoading,
        error,
    } = useQuery<Team[]>({
        queryKey: ["teams"],
        queryFn: async () => {
            const response = await apiClient.get("/teams");
            return response.data;
        },
    });

    const handleCreateTeam = async (teamData: TeamCreateData) => {
        try {
            setIsLoading(true);
            setError(null);
            const newTeam = await createTeam(teamData);
            await fetchTeams(); // Обновляем список после создания
            return newTeam;
        } catch (err) {
            setError("Ошибка при создании команды");
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteTeam = async (teamId: number) => {
        try {
            setIsLoading(true);
            setError(null);
            await deleteTeam(teamId);
            await fetchTeams(); // Обновляем список после удаления
        } catch (err) {
            setError("Ошибка при удалении команды");
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const canCreateTeam = user?.role === "admin" || user?.role === "organizer";
    const canDeleteTeam = user?.role === "ADMIN";

    return {
        teams,
        handleCreateTeam,
        handleDeleteTeam,
        isLoading,
        error,
        canDeleteTeam: user?.role === "ADMIN",
    };
};
