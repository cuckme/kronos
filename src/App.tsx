import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Authentication } from "@/components/Authentication";
import { KronosSidebar } from "@/components/KronosSidebar";
import Index from "./pages/Index";
import { OmnidroidLogs } from "./pages/OmnidroidLogs";
import { IslandFinances } from "./pages/IslandFinances";
import { SystemAccessLogs } from "./pages/SystemAccessLogs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Authentication onAuthenticated={() => setIsAuthenticated(true)} />
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full bg-background">
              <KronosSidebar />
              <main className="flex-1 p-6">
                <div className="mb-4">
                  <SidebarTrigger className="mb-4" />
                </div>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/omnidroid" element={<OmnidroidLogs />} />
                  <Route path="/finances" element={<IslandFinances />} />
                  <Route path="/access-logs" element={<SystemAccessLogs />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </SidebarProvider>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
