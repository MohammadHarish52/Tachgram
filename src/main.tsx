import ReactDOM from "react-dom/client";
// this means that browser router will control the routing of our application
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import QueryProvider from "./lib/react-query/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryProvider>
  </BrowserRouter>
);
