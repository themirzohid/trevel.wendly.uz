import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GlobeAltIcon } from "@heroicons/react/24/outline"

export function NavbarWithSearch() {
  const [openNav, setOpenNav] = React.useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const navItems = [
    { label: t("hob"), path: "/" },
    { label: t("creat"), path: "/cerat" },
    { label: t("Tours"), path: "/tours" },
    { label: t("content"), path: "/content" },
  ];

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky top-0 z-50 max-w-full rounded-3xl border-spacing-8 bg-gradient-to-r from-[#6A1B9A] via-[#8E24AA] to-[#6A1B9A] px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between text-white">
        <Typography className="text-2xl font-bold tracking-widest text-white cursor-pointer hover:text-pink-300 transition">
          WANDERLY
        </Typography>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <li key={index} className="cursor-pointer text-purple-100 hover:text-pink-400 transition duration-300">
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <Input
            type="search"
            placeholder="Search tours..."
            className="!bg-white/20 !text-white placeholder:text-purple-200 rounded-full px-4 focus:!border-pink-400 backdrop-blur-md"
            containerProps={{ className: "min-w-[180px]" }}
            labelProps={{ className: "hidden" }}
          />

          {/* Tilni tanlash menyusi */}
          <Menu>
            <MenuHandler>
              <IconButton variant="text" className="text-white hover:bg-white/10 rounded-full">
                <GlobeAltIcon className="h-6 w-6" />
              </IconButton>
            </MenuHandler>
            <MenuList className="bg-white border-none shadow-xl">
              <MenuItem onClick={() => changeLanguage("uz")} className="flex items-center gap-2">
                🇺🇿 <span className="text-gray-800 font-medium">O'zbekcha</span>
              </MenuItem>
              <MenuItem onClick={() => changeLanguage("en")} className="flex items-center gap-2">
                🇺🇸 <span className="text-gray-800 font-medium">English</span>
              </MenuItem>
            </MenuList>
          </Menu>

          <Button className="rounded-full bg-[#EC407A] hover:bg-pink-600 shadow-md transition text-white">
            {t("search_btn") || "Search"}
          </Button>
        </div>

        <IconButton
          variant="text"
          className="lg:hidden text-white"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? "✕" : "☰"}
        </IconButton>
      </div>

      <MobileNav open={openNav}>
        <div className="flex flex-col gap-4 mt-4 text-white pb-4">
          {navItems.map((item, index) => (
            <Link key={index} to={item.path} className="text-purple-100 hover:text-pink-400">
              {item.label}
            </Link>
          ))}
          
          <hr className="border-white/20" />
          
          <div className="flex gap-2">
            <Button size="sm" onClick={() => changeLanguage("uz")} className="bg-white/20 text-white flex-1">UZB</Button>
            <Button size="sm" onClick={() => changeLanguage("en")} className="bg-white/20 text-white flex-1">ENG</Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}