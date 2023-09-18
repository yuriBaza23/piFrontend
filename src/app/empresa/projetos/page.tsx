import Sidebar from "@/components/ui/Sidebar";
import NewProject from "@/components/ui/NewProject";
export default function About() {
  return (
    <div>
      <div className="layout">
        <Sidebar></Sidebar>
        <NewProject />
      </div>
    </div>
  );
}
