import Auth from "./pages/Auth";
import ClassesToday from "./pages/ClassesToday";
import Journal from "./pages/Journal";
import Schedule from "./pages/Schedule";
import Reports from "./pages/Reports";
import {
  JOURNAL_ROUTE,
  LOGIN_ROUTE,
  REPORTS_ROUTE,
  SCHEDULE_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: JOURNAL_ROUTE,
    Component: <ClassesToday />,
  },
  {
    path: JOURNAL_ROUTE + "/:id",
    Component: <Journal />,
  },
  {
    path: SCHEDULE_ROUTE,
    Component: <Schedule />,
  },
  {
    path: REPORTS_ROUTE,
    Component: <Reports />,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: <Auth />,
  },
];
