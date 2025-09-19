import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeProvider";
import { useLanguage } from "@/contexts/LanguageProvider";
import { Moon, Sun, Monitor, Globe } from "lucide-react";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: "en", name: "English", native: "English" },
    { code: "hi", name: "Hindi", native: "हिंदी" },
    { code: "bn", name: "Bengali", native: "বাংলা" },
    { code: "te", name: "Telugu", native: "తెలుగు" },
    { code: "ta", name: "Tamil", native: "தமிழ்" },
    { code: "mr", name: "Marathi", native: "मराठी" },
    { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
    { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" },
    { code: "ml", name: "Malayalam", native: "മലയാളം" },
    { code: "pa", name: "Punjabi", native: "ਪੰਜਾਬੀ" },
    { code: "or", name: "Odia", native: "ଓଡିଆ" },
    { code: "as", name: "Assamese", native: "অসমীয়া" },
  ];

  const themes = [
    { value: "light", label: t("theme.light"), icon: Sun },
    { value: "dark", label: t("theme.dark"), icon: Moon },
    { value: "system", label: t("theme.system"), icon: Monitor },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">{t("settings.title")}</h2>
          <p className="text-muted-foreground mt-2">
            Manage your dashboard preferences and system settings
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Language Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>{t("settings.language")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Select Language</Label>
                <Select value={language} onValueChange={(value) => setLanguage(value as any)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <div className="flex items-center space-x-2">
                          <span>{lang.native}</span>
                          <span className="text-muted-foreground">({lang.name})</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Theme Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Monitor className="h-5 w-5" />
                <span>{t("settings.theme")}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Theme Preference</Label>
                <div className="grid grid-cols-1 gap-2">
                  {themes.map((themeOption) => {
                    const Icon = themeOption.icon;
                    return (
                      <Button
                        key={themeOption.value}
                        variant={theme === themeOption.value ? "default" : "outline"}
                        className="justify-start"
                        onClick={() => setTheme(themeOption.value as any)}
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {themeOption.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;