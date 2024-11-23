import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import { Home, Settings, Menu as MenuIcon } from "lucide-react";
import IconLight from "../../../public/icons/IconLight";
import IconDark from "../../../public/icons/IconDark";
import IconNameLight from "../../../public/icons/iconNameLight";
import IconNameDark from "../../../public/icons/IconNameDark";
import SupportDark from "../../../public/icons/SupportDark";
import SupportLight from "../../../public/icons/SupportLight";
import { useTheme } from "../ThemeProvider";

export default function NavbarSupport() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();

  const handleOpenSheet = () => {
    setIsSheetOpen(true);
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  if (location.pathname === `/Panel`) return null;

  return (
    <header className="flex h-20 w-full items-center px-4 md:px-6">
      {/* Icono y nombre del sitio */}
      <Link to={`/`} className="hidden md:flex items-center">
        {theme === "dark" ? (
          <IconDark className="h-16 w-16" />
        ) : (
          <IconLight className="h-16 w-16" />
        )}
        <div className="ml-5">
          {theme === "dark" ? <SupportDark /> : <SupportLight />}
        </div>
        <div className="-ml-24">
          {theme === "dark" ? <IconNameDark /> : <IconNameLight />}
        </div>
        <span className="sr-only">Creative</span>
      </Link>

      {/* Menú para pantallas grandes */}
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          to={`/Soporte`}
          className="group inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-gray-800"
        >
          Soporte
        </Link>
        <Link
          to={`/Panel`}
          className="group inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-gray-800"
        >
          Panel
        </Link>
        <Link
          to={`/IA`}
          className="group inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-gray-800"
        >
          IA
        </Link>
        <Link
          to={`/Herramientas-IA`}
          className="group inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-gray-800"
        >
          Herramientas de IA
        </Link>
        <ModeToggle />
      </nav>

      {/* Menú móvil */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={handleOpenSheet}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="lg:hidden">
          <div className="grid gap-2 py-6">
            <Link
              to={`/Soporte`}
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              <Home className="h-10 w-10 px-2" />
              Soporte
            </Link>
            <Link
              to={`/IA`}
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              <Home className="h-10 w-10 px-2" />
              IA
            </Link>
            <Link
              to={`/Herramientas-IA`}
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              <Home className="h-10 w-10 px-2" />
              Herramientas de IA
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Configuración móvil */}
      <Sheet open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <SheetTrigger asChild>
          <Button
            onClick={handleOpenSettings}
            variant="light"
            className="ml-auto lg:hidden"
          >
            <Settings />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="rounded-t-xl lg:hidden">
          <div className="flex gap-4 py-4 items-center">
            <div className="flex-1">
              <ModeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
