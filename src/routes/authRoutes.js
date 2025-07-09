import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";

const authRoutes = [
  {
    path: "/login",
    name: "Connexion",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Inscription",
    component: Register,
    layout: "/auth",
  },
];

export default authRoutes;
