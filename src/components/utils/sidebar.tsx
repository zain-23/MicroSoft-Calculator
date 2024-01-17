export const Sidebar = ({ sidebarOpen }: any) => {
  return (
    <aside
      className={`w-60 h-[398px] rounded-tr-xl rounded-br-xl absolute top-0 left-0 bg-[var(--sidebar-color)] z-[1] shadow-2xl duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="fixed top-0 left-0 w-full h-12"></div>
      <div className="fixed bottom-0 left-0 w-full h-14 rounded-br-xl flex items-end p-1">
        <div className="hover:bg-[var(--hover-color)] px-4 py-2 w-full rounded-md">Settings</div>
      </div>
    </aside>
  );
};