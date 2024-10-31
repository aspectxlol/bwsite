import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { useEffect } from "react";
import ThemeProvider from "~/providers/ThemeProvider";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <ThemeProvider>
      <div className={GeistSans.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
