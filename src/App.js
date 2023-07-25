import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Error, ProtectedRoute  } from "./pages";
import { Deals, Products, Rooms, Under10, PlanningTools, BackToSchool, SharedLayout} from './pages/dashboard'

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
          <Route index element ={<Deals/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="rooms" element={<Rooms/>}/>
          <Route path="deals" element={<Deals/>}/>
          <Route path="under10" element={<Under10/>}/>
          <Route path="planningtools" element={<PlanningTools/>}/>
          <Route path="backtoschool" element={<BackToSchool/>}/>

        </Route>
        <Route
          path="/register"
          element={
            <div>
              {/* <Register /> */}
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
