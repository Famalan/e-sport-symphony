import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface TournamentForm {
  name: string;
  type: string;
  description: string;
  rules: string;
  maxTeams: number;
}

const CreateTournament = () => {
  const form = useForm<TournamentForm>();
  const navigate = useNavigate();

  const onSubmit = (data: TournamentForm) => {
    console.log("Tournament data:", data);
    toast.success("Турнир успешно создан!");
    navigate("/tournaments");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Создать турнир</h1>
          <p className="text-muted-foreground">Заполните форму для создания нового турнира</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Информация о турнире</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Название турнира</FormLabel>
                      <FormControl>
                        <Input placeholder="Введите название турнира" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Тип турнира</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите тип турнира" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="single">Single Elimination</SelectItem>
                          <SelectItem value="double">Double Elimination</SelectItem>
                          <SelectItem value="round">Round Robin</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Описание</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Введите описание турнира"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rules"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Правила</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Введите правила турнира"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="maxTeams"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Максимальное количество команд</FormLabel>
                      <FormControl>
                        <Input type="number" min="2" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex justify-end gap-4">
                  <Button variant="outline" onClick={() => navigate("/tournaments")}>
                    Отмена
                  </Button>
                  <Button type="submit">Создать турнир</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CreateTournament;