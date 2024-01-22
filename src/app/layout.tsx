import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "react-modal-video/scss/modal-video.scss";
import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/app/(webinars)/_components/navbar";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/providers";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { NAVBAR_HEIGHT } from "./(marketing)/_components/navbar";
import Footer from "./_components/footer";
import PopUp from "./_components/pop-up";
import GA from "./_components/ga";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.turningpoint.asia/"),
  title:
    "Turning Point | Chúng tôi tin đây là thời khắc bạn cần lập tức thay đổi cuộc sống của bạn.",
  description:
    "Definition: the platform where anyone can learn from the world's best & become your best version. As a member of our community,  YOU get unlimited access to instructors, who has an expert knowledge or skill in a particular area.",
  openGraph: {
    title:
      "Turning Point | Chúng tôi tin đây là thời khắc bạn cần lập tức thay đổi cuộc sống của bạn.",
    description:
      "Definition: the platform where anyone can learn from the world's best & become your best version. As a member of our community,  YOU get unlimited access to instructors, who has an expert knowledge or skill in a particular area.",
    url: "https://www.turningpoint.asia/",
    siteName:
      "Turning Point | Chúng tôi tin đây là thời khắc bạn cần lập tức thay đổi cuộc sống của bạn.",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://www.turningpoint.asia/opengraph-image.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn("bg-background antialiased", sourceSans.className)}
        suppressHydrationWarning={true}
      >
        <Providers>
          <EdgeStoreProvider>
            <PopUp label="Turning Point Slogan" src="/Pop-up slogan.png" />
            {children}
            <Footer />
            <Toaster position="top-center" />
          </EdgeStoreProvider>
        </Providers>
      </body>
      <GA />
    </html>
  );
}
