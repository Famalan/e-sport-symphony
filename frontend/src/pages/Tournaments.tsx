import { DashboardLayout } from "@/components/DashboardLayout";
import { TournamentList } from "@/components/tournaments/TournamentList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Tournaments = () => {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Турниры</h1>
                    <Button asChild>
                        <Link to="/tournaments/create">
                            <Plus className="mr-2 h-4 w-4" /> Создать турнир
                        </Link>
                    </Button>
                </div>
                <TournamentList />
            </div>
        </DashboardLayout>
    );
};

export default Tournaments;