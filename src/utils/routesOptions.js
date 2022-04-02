import { HomePage } from "../pages/Home";
import { AboutPage } from "../pages/About";
import { ContactPage } from "../pages/Contact";

export const publicRoutes = [
  {
    to: "/home",
    path: "home",
    Component: HomePage,
    name: "Inicio",
  },
  {
    to: "/about",
    path: "about",
    Component: AboutPage,
    name: "Acerca",
  },
  {
    to: "/contact",
    path: "contact",
    Component: ContactPage,
    name: "Contact",
    hide: true,
  },
];
