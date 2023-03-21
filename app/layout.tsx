import { Nunito } from "next/font/google";

import LoginModal from "@/app/common/components/modals/LoginModal";
import RegisterModal from "@/app/common/components/modals/RegisterModal";
import RentModal from "@/app/common/components/modals/RentModal";
import SearchModal from "@/app/common/components/modals/SearchModal";
import Navbar from "@/app/components/layout/Navbar";

import ToasterServer from "./common/components/ToasterServer";
import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterServer />
        <LoginModal />
        <RegisterModal />
        <SearchModal />
        <RentModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
