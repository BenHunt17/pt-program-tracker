import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import ClientContextProvider from "./main/clientContext/ClientContextProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <ClientContextProvider>
          <App />
        </ClientContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
