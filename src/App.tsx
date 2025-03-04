
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseEditor from "./pages/CourseEditor";
import CoursePreview from "./pages/CoursePreview";
import Users from "./pages/Users";
import WhatsApp from "./pages/WhatsApp";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { ROUTES } from "./lib/constants";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Index />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.COURSES} element={<Courses />} />
          <Route path={`${ROUTES.COURSES}/editor`} element={<CourseEditor />} />
          <Route path={`${ROUTES.COURSES}/editor/:id`} element={<CourseEditor />} />
          <Route path={`${ROUTES.COURSES}/preview/:id`} element={<CoursePreview />} />
          <Route path={ROUTES.USERS} element={<Users />} />
          <Route path={ROUTES.WHATSAPP} element={<WhatsApp />} />
          <Route path={ROUTES.ANALYTICS} element={<Analytics />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
