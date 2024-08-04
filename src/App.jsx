import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Login from "./features/authentication/Login";
import Signup from "./features/authentication/Signup";
import ForgotPassword from "./features/authentication/ForgotPassword";
import Otp from "./features/authentication/Otp";
import GetStarted from "./pages/GetStarted";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
