import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";

import ContactLayout from "./layouts/ContactLayout";
import Mail from "./pages/Mail";
import Phone from "./pages/Phone";
import PageNotFound from "./pages/PageNotFound";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="mail" element={<Mail />} />
          <Route path="phone" element={<Phone />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
