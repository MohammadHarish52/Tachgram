import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryclient = new QueryClient();

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
