import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import Landing from "./pages/Landing";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Login from "./features/authentication/Login";
import Signup from "./features/authentication/Signup";
import ForgotPassword from "./features/authentication/ForgotPassword";
import Otp from "./features/authentication/Otp";

// Authenticated users
import Dashboard from "./pages/Dashboard";
import Activity from "./pages/Activity";
import Bills from "./pages/Bills";
import Transactions from "./pages/Transactions";
import Complaints from "./pages/Complaints";
import Settings from "./pages/Settings";
import Terms from "./pages/Terms";
import GetStarted from "./pages/GetStarted";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { DarkModeProvider } from "./context/DarkModeContext";
import Account from "./pages/Account";
import { PopUpProvider } from "./context/PopUpContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <DarkModeProvider>
        <PopUpProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />

            <GlobalStyles />
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

                <Route
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="activity" element={<Activity />} />
                  <Route path="bills" element={<Bills />} />
                  <Route path="transactions" element={<Transactions />} />
                  <Route path="complaints" element={<Complaints />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="account" element={<Account />} />
                </Route>
              </Routes>
            </BrowserRouter>
            <Toaster
              position="top-right"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "var(--color-grey-0)",
                  color: "var(--color-grey-700)",
                },
              }}
            />
          </QueryClientProvider>
        </PopUpProvider>
      </DarkModeProvider>
    </AuthProvider>
  );
}

export default App;
