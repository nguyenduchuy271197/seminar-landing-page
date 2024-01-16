import Script from "next/script";
import React from "react";

export default function GA() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-H6YENFYC1W"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-H6YENFYC1W');
        `}
      </Script>
    </>
  );
}
