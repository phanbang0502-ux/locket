import React from "react";

export const metadata = {
  title: "Locket Gold Bang",
  description: "Cấu hình Locket Gold Bang",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
