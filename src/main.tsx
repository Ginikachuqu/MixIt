import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Context
import SidebarProvider from "./contexts/sidebarcontext/SidebarContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>
);
