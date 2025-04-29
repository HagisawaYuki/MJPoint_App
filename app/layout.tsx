"use client"
import Header from "@/components/Header";
import { Provider } from "@/components/ui/provider";


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
        {children}
        </Provider>
      </body>
    </html>
  );
}
