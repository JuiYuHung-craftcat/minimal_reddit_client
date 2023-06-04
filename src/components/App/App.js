import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from 'react-router-dom';
import Root from "../Root/Root";


const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
};

export default App;
