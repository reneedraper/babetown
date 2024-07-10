
import type { Metadata } from "next";
import './globals.scss';
import NavBar from "./navbar/navbar";

export const metadata: Metadata = {
  title: "Babetown USA",
  description: "You belong here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-light">
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="theme-color" content="#000000" />
      {/* <link rel="stylesheet" href="stylesheet.css"></link> */}
      <body className="rainbow-background">
      <NavBar/>
      <div className="section main-height">
                <div className="container">
                {children}
                </div>
            </div>
</body>
    </html>
  );
}
