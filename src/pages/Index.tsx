import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Plus, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Моковые данные для турниров
  const tournaments = [
    {
      id: 1,
      name: "CS:GO Summer Championship",
      type: "Double Elimination",
      teams: 16,
      startDate: "2024-06-15",
      status: "Регистрация",
    },
    {
      id: 2,
      name: "Dota 2 Pro League",
      type: "Single Elimination",
      teams: 8,
      startDate: "2024-07-01",
      status: "Скоро",
    },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Турниры</h1>
          <p className="text-gray-500">Управление киберспортивными турнирами</p>
        </div>
        <Link to="/tournaments/create">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Plus className="w-4 h-4" /> 
            Создать турнир
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament) => (
          <div 
            key={tournament.id} 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2">{tournament.name}</h3>
            <p className="text-gray-600 mb-4">{tournament.type}</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-500">
                <Users className="w-4 h-4" />
                <span>{tournament.teams} команд</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{tournament.startDate}</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-medium text-blue-600">
                  {tournament.status}
                </span>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Index;