import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/home"; // New Home component
import CvTemplate from "./pages/CvTemplate"; // Your CV template page
import { Routes, Route } from 'react-router-dom';
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App bg-mypri min-h-screen w-full relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/public/assets/bgt.jpg')] bg-repeat bg-auto bg-center opacity-[1.8%]"
        aria-hidden="true"
      ></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Shared Navbar */}
        <header>
          <Navbar />
        </header>

        {/* Route-Specific Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cvtemplate" element={<CvTemplate />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
        </Routes>

        {/* Shared Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;