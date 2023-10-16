// import "./globals.css";
import Modal from "@/components/taskboard/Modal";

export const metadata = {
  title: "Gerencia de projeto",
  description: "",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Modal />
    </div>
  );
}
