"use client"
import Header from "@/components/Header";
import { Provider } from "@/components/ui/provider";
import { Suspense } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Provider>
          <Header>

          </Header>
        </Provider>
        <Provider>
        <Suspense fallback={<div>Loading...</div>}>
        {children}
        </Suspense>
        </Provider>
      </body>
    </html>
  );
}
