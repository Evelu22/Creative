// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import { Home, Settings, Menu as MenuIcon } from "lucide-react";
import IconNameDark from "../../../public/icons/iconNameDark";
import { useTheme } from "../ThemeProvider";

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  useTheme();
  const location = useLocation();

  const handleOpenSheet = () => {
    setIsSheetOpen(true);
  };

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  // Excluir Navbar en rutas que comienzan con "/Soporte" o "/Panel"
  if (location.pathname.startsWith("/Soporte") || location.pathname.startsWith("/Panel")) {
    return null;
  }

  return (
    <header className="flex h-20 w-full items-center px-4 md:px-6">
      {/* Icono y nombre del sitio */}
      <Link to="/" className="hidden md:flex items-center">
        <img src="/img/creative.png" alt="Creative" className="h-14 w-14" /> {/* Aquí se muestra el logo */}
        <div className="ml-5">
          <IconNameDark />
        </div>
        <span className="sr-only"></span>
      </Link>

      {/* Menú para pantallas grandes */}
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link
          to="/"
          className="group inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-gray-800"
        >
          Inicio
        </Link>
        <Link
          to="/IA"
          className="group inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-gray-800"
        >
          IA
        </Link>
        <Link
          to="/IATools"
          className="group inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-gray-800"
        >
          Herramientas IA
        </Link>
        <Link
          to="/About"
          className="group inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-gray-800"
        >
          Acerca de
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
            <span className="sr-only">Menú de navegación</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="lg:hidden">
          <div className="grid gap-2 py-6">
            <Link
              to="/IATools"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              <Home className="h-10 w-10 px-2" />
              Inicio
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
