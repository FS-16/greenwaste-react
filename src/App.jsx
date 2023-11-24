import Home from './pages/Home';
import Solution from './pages/Solution';
import AllQuestion from './pages/forum/pages/AllQuestion';

import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import ErrorPage from './pages/ErrorPages';
import Login from './pages/Login';
import Register from './pages/Register';
import AskQuestion from './pages/forum/pages/AskQuestion';
import MyParticipation from './pages/forum/pages/MyParticipation';
import MyQuestion from './pages/forum/pages/MyQuestion';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/solution',
          element: <Solution />,
        },
        {
          path: '/forum/all-question',
          element: <AllQuestion />,
        },
        {
          path: '/forum/ask-question',
          element: <AskQuestion />,
        },
        {
          path: '/forum/my-question',
          element: <MyQuestion />,
        },
        {
          path: '/forum/my-participation',
          element: <MyParticipation />,
        },
        {
          element: <PrivateRoute />,
          children: [
            {
              path: '/profile',
              element: <Profile />,
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
