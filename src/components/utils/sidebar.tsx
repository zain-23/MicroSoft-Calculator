export const Sidebar = ({ sidebarOpen }: any) => {
  return (
    <aside
      className={`w-60 h-[398px] rounded-tr-xl rounded-br-xl absolute top-0 left-0 bg-[var(--sidebar-color)] z-[1] shadow-2xl duration-300 ease-in-out flex items-center ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="fixed top-0 left-0 w-full h-12 border"></div>
      <div className="border w-full h-[74%] overflow-y-auto">
        <div className="px-2 py-4 hover:bg-[var(--hover-color)] rounded-md">
          Setting
        </div>
        <div className="px-2 py-4 hover:bg-[var(--hover-color)] rounded-md">
          Setting
        </div>
        <div className="px-2 py-4 hover:bg-[var(--hover-color)] rounded-md">
          Setting
        </div>
        <div className="px-2 py-4 hover:bg-[var(--hover-color)] rounded-md">
          Setting
        </div>
        <div className="px-2 py-4 hover:bg-[var(--hover-color)] rounded-md">
          Setting
        </div>
        <div className="px-2 py-4 hover:bg-[var(--hover-color)] rounded-md">
          Setting
        </div>
        <div className="px-2 py-4 hover:bg-[var(--hover-color)] rounded-md">
          Setting
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-14 rounded-br-xl flex items-end p-1 border">
        <div className="hover:bg-[var(--hover-color)] px-4 py-2 w-full rounded-md">
          Settings
        </div>
      </div>
    </aside>
  );
};
