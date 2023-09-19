import Sidebar from "@/components/ui/Sidebar";
import NewProject from "@/components/ui/NewProject";
export default function About() {
  return (
    <div>
      <div className="layout">
        <Sidebar></Sidebar>
        <div className="w-[calc(100vw-6em-4rem)] flex justify-end">
          <NewProject />
        </div>
      </div>
    </div>
  );
}
