import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from 'react-router-dom';
import Root from "../Root/Root";
import Contents from "../Contents/Contents"
import About from "../About/About";
import "../../output.css";

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Contents />} />
      <Route path="/about" element={<About />} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
};

export default App;
