import Sidebar from "@/components/ui/Sidebar";
import NewProject from "@/components/ui/NewProject";
import RegisterFinance from "@/components/ui/RegisterFinance";
export default function About() {
  return (
    <div>
      <div className="layout">
        <Sidebar></Sidebar>
        <div className="w-[calc(100vw-6em-4rem)] flex justify-end space-x-2">
          <RegisterFinance />
          <NewProject />
        </div>
      </div>
    </div>
  );
}
