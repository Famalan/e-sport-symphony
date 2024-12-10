import { Trophy, Users, Calendar, Settings, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: "Главная", path: "/" },
    { icon: Trophy, label: "Турниры", path: "/tournaments" },
    { icon: Users, label: "Команды", path: "/teams" },
    { icon: Calendar, label: "Расписание", path: "/schedule" },
    { icon: Settings, label: "Настройки", path: "/settings" },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-8">
        <Trophy className="w-6 h-6 text-blue-600" />
        <span className="text-xl font-bold">E-Sport Symphony</span>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive 
                      ? "bg-blue-50 text-blue-600" 
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};