// import "./globals.css";
import Modal from "@/components/taskboard/Modal";

export const metadata = {
  title: "Gerencia de projeto",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f6f8]">
        {children}
        <Modal />
      </body>
    </html>
  );
}
