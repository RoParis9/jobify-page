import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/Components/NavBar/Navbar";
import ClientProvider from "@/app/Components/Hoc/ClientProvider"
import Footer from "./Components/Home/Footer";
import ScrollToTop from "./Components/Helper/ScrollToTop";

const font = Plus_Jakarta_Sans({
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: "Jobify",
    description: "Find your dream job",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      <ClientProvider>
        <html lang="pt-br">
            <body className={font.className}>
                <Navbar />
                {children}
                <Footer />
                <ScrollToTop />
            </body>
        </html>
      </ClientProvider>
    );
}
