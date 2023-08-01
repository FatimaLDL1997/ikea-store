import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Error, ProtectedRoute } from "./pages";
import {
  Deals,
  Products,
  Rooms,
  Under10,
  PlanningTools,
  BackToSchool,
  SharedLayout,
  Main,
} from "./pages/dashboard";
import { NewProducts } from "./pages/subProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Main />} />
          <Route path="main" element={<Main />} />
          <Route path="products" element={<Products />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="deals" element={<Deals />} />
          <Route path="under10" element={<Under10 />} />
          <Route path="planningtools" element={<PlanningTools />} />
          <Route path="backtoschool" element={<BackToSchool />} />

          <Route path="newproducts" element={<NewProducts />} />
        </Route>
        <Route path="/register" element={<div>{/* <Register /> */}</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
