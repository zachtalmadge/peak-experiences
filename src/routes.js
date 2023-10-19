import App from "./App";
import Home from "./Pages/Home";
import AllActivites from "./Pages/AllActivites";
import ActivityDetails from "./Pages/ActivityDetails";
import UserList from "./Pages/UserList";
import ErrorPage from './Pages/ErrorPage'
import Form from "./Pages/Form";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/activites",
        element: <AllActivites />,
      },
      {
        path: "/activites/:id",
        element: <ActivityDetails />,
      },
      {
        path: "/mybucketlist",
        element: <UserList />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      // {
      //   path: "/*",
      //   element: <ErrorPage />
      // }
    ],
  },
];

export default routes;
