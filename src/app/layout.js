import { Toaster } from "react-hot-toast";
import "./globals.css";
import "./style.css";
import Script from "next/script";
import AOSInit from "./(site)/components/AOSInit";

// import './styles/bootstrap-custom.scss';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <Script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/js/global-utils.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <AOSInit />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
