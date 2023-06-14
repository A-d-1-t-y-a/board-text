import Provider from "@/components/Provider";

import "styles/globals.css";

export const metadata = {
  title: "Board.",
  description: "OpeninApp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className="min-h-screen w-full font-montserrat relative">
          <main className="bg-backgroundColor">{children}</main>
        </body>
      </Provider>
    </html>
  );
}
