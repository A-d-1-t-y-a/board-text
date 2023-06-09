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
        <body className="min-h-screen w-full font-montserrat">{children}</body>
      </Provider>
    </html>
  );
}
