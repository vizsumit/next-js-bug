"use client";
import "@/styles/globals.scss";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
// import Script from "next/script";
// COMPS
import { Layout } from "@/components/layout/Layout";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      {/* <Gtag /> */}
      <NextUIProvider navigate={router.push}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </NextUIProvider>
    </>
  );
};

// const Gtag = () => {
//   const ID = "G-xxxxx";

//   return (
//     <>
//       <Script
//         src={`https://www.googletagmanager.com/gtag/js?id=${ID}`}
//         strategy="afterInteractive"
//       />
//       <Script id="google-analytics" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){window.dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', '${ID}');
//         `}
//       </Script>
//     </>
//   );
// };

export default App;
