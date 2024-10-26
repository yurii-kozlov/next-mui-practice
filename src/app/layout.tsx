import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "@/Providers";
import { Container } from "@mui/material";
import { Layout } from "@/components/Layout";
import "./globals.scss";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Todo App with MUI",
  description: "A Todo App template that can be reused to pratice different technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>
          <Layout>
            <Container>{children}</Container>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
