import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import AnimatedCursor from "react-animated-cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rehan's Web Development Portfolio",
  description:
    "Explore Rehan's professional portfolio featuring innovative web development projects crafted with Next.js, React, and Tailwind CSS. Discover his expertise in creating high-performance, responsive, and modern applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:5198285,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {/* <AnimatedCursor
          innerSize={8} // Size of the inner dot
          outerSize={50} // Size of the outer circle
          color="255, 255, 255" // RGB color for the dot (white for visibility)
          outerAlpha={0.5} // Adjust opacity for the outer circle
          innerScale={1} // No scaling on hover
          outerScale={1} // No scaling on hover
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
          innerStyle={{
            backgroundColor: "rgba(255, 255, 255, 1)", // Bright white for the inner dot
          }}
          outerStyle={{
            background: "linear-gradient(to right, #34d399, #38bdf8)", // Emerald to Sky Blue gradient
            border: "2px solid rgba(255, 255, 255, 0.5)", // Light border for visibility
            backgroundColor: "transparent", // Make the outer circle transparent
          }}
        /> */}

        {children}
      </body>
    </html>
  );
}
