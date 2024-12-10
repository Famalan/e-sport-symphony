import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Plus, Users, Calendar } from "lucide-react";

const Index = () => {
  // Здесь будет интеграция с API для получения турниров
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
          <p className="text-muted-foreground">Управление киберспортивными турнирами</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Создать турнир
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament) => (
          <Card key={tournament.id} className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle>{tournament.name}</CardTitle>
              <CardDescription>{tournament.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{tournament.teams} команд</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{tournament.startDate}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm font-medium text-primary">
                    {tournament.status}
                  </span>
                  <Button variant="secondary" size="sm">
                    Подробнее
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Index;