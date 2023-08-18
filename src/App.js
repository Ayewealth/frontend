import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import PrivateRoutes from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Home />} path="/" exact />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
