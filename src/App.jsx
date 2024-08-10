import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import { PopUpProvider } from "./context/PopUpContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { lazy, Suspense } from "react";

const Landing = lazy(() => import("./pages/Landing"));
const Product = lazy(() => import("./pages/Product"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./features/authentication/Login"));
const Signup = lazy(() => import("./features/authentication/Signup"));
const ForgotPassword = lazy(() =>
  import("./features/authentication/ForgotPassword")
);
const Otp = lazy(() => import("./features/authentication/Otp"));

// Authenticated users
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Activity = lazy(() => import("./pages/Activity"));
const Bills = lazy(() => import("./pages/Bills"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Complaints = lazy(() => import("./pages/Complaints"));
const Settings = lazy(() => import("./pages/Settings"));
const Terms = lazy(() => import("./pages/Terms"));
const GetStarted = lazy(() => import("./pages/GetStarted"));
const Account = lazy(() => import("./pages/Account"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

import AppLayout from "./ui/AppLayout";
import { DarkModeProvider } from "./context/DarkModeContext";

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
      <PopUpProvider>
        <QueryClientProvider client={queryClient}>
          <DarkModeProvider>
            <ReactQueryDevtools initialIsOpen={false} />

            <GlobalStyles />
            <BrowserRouter>
              <Suspense
                fallback={
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
                }
              >
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
                    path="/app"
                    element={
                      <ProtectedRoute>
                        <AppLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route
                      index
                      element={<Navigate replace to="dashboard" />}
                    />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="activity" element={<Activity />} />
                    <Route path="bills" element={<Bills />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="complaints" element={<Complaints />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="account" element={<Account />} />
                  </Route>
                </Routes>
              </Suspense>
            </BrowserRouter>
          </DarkModeProvider>
        </QueryClientProvider>
      </PopUpProvider>
    </AuthProvider>
  );
}

export default App;
