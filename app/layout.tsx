import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Abdullah | Portfolio",
  description: "Abdullah | My Portfolio showcase my shill, experiences, project and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen = "true">
        <div className="relative h-screen w-full text-white ">
          <div className="absolute h-full w-full inset-0 bg-black/60"></div>
        <video autoPlay loop muted playsInline className="absolute object-cover h-full w-full inset-0 -z-10">
          <source src="/background.mp4" type="video/mp4" />
        </video>
          <div className="absolute w-full top-0 ">            
                {children}          
          </div>  
              
        </div>
      </body>
    </html>
  );
}
