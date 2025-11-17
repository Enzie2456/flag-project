import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import FlagAll from "./pages/FlagAll/FlagAll";
import FlagDetail, { FlagsDetailsLoader } from "./pages/FlagDetail";
import NotFound from "./pages/NotFound";
import FlagError from "./pages/FlagAll/FlagError";

// Layouts
import RootLayout from "./layouts/RootLayout";


const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<FlagAll />} errorElement={<FlagError />} />
    <Route
      path="flagdetails/:id"
      element={<FlagDetail />}
      loader={FlagsDetailsLoader}
    />
    <Route path="*" element={<NotFound />} />
  </Route>
);


const router = createBrowserRouter(routesFromElements);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
