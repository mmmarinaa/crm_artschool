import Auth from "./pages/Auth";
import ClassesToday from "./pages/ClassesToday";
import Journal from "./pages/Journal";
import { JOURNAL_ROUTE, LOGIN_ROUTE } from "./utils/consts";

export const authRoutes = [
  {
    path: JOURNAL_ROUTE,
    Component: <ClassesToday />,
  },
  {
    path: JOURNAL_ROUTE + "/:id",
    Component: <Journal />,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Auth />,
  },
];
