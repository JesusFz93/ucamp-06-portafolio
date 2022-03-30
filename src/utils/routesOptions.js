import { HomePage } from "../pages/Home";
import { AboutPage } from "../pages/About";
import { ContactPage } from "../pages/Contact";

export const publicRoutes = [
  {
    to: "/home",
    path: "home",
    Component: HomePage,
    name: "Home",
  },
  {
    to: "/about",
    path: "about",
    Component: AboutPage,
    name: "About",
  },
  {
    to: "/contact",
    path: "contact",
    Component: ContactPage,
    name: "Contact",
  },
];
