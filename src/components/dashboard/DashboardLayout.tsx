import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, BarChart3, Users, AlertTriangle, Map, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useLanguage } from "@/contexts/LanguageProvider";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const { t } = useLanguage();

  const navigationItems = [
    { href: "/", icon: BarChart3, label: t("nav.overview") },
    { href: "/tourists", icon: Users, label: t("nav.tourists") },
    { href: "/alerts", icon: AlertTriangle, label: t("nav.alerts") },
    { href: "/map", icon: Map, label: t("nav.map") },
    { href: "/settings", icon: Settings, label: t("nav.settings") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Nirbhay</h1>
              <p className="text-sm text-muted-foreground">Authority Dashboard</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-card">
          <nav className="space-y-1 p-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};