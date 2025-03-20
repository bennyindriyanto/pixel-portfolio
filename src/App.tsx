import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Disable Right-Click
    document.addEventListener("contextmenu", (event) => event.preventDefault());

    // Disable Developer Tools Shortcuts
    const disableShortcuts = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey &&
          event.shiftKey &&
          ["I", "J", "C"].includes(event.key)) || // Ctrl+Shift+I/J/C
        (event.ctrlKey && event.key === "U") || // Ctrl+U (View Page Source)
        event.key === "F12" // F12 (DevTools)
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", disableShortcuts);

    return () => {
      document.removeEventListener("contextmenu", (event) =>
        event.preventDefault()
      );
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
