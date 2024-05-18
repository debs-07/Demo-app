import "./App.css";
import Home from "./pages/Home";
import SymptonsChecker from "./pages/SymptomsChecker";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/symptoms-checker",
    element: <SymptonsChecker />,
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
