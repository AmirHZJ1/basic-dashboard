import SidebarHeader from "./SidebarHeader";
import Menus from "./Menus";
import menuItems from "../../data/menuItems";

const Sidebar = () => {
  return (
    <aside className="w-[272px] h-screen sticky top-0 bg-white border-l border-zinc-200 p-6 overflow-y-auto">
      <SidebarHeader />
      <Menus menus={menuItems} />
    </aside>
  );
};

export default Sidebar;