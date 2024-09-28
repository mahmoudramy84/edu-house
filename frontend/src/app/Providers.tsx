import { ThemeProvider } from "next-themes";
import React from "react";

type TProvidersProps = {
  children: React.ReactNode;
  attribute: string;
  defaultTheme: string;
};

const Providers = ({ children, attribute, defaultTheme }: TProvidersProps) => {
  return (
    <ThemeProvider defaultTheme={defaultTheme} attribute={attribute}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
