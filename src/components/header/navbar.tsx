import { RxCross2 } from "react-icons/rx";
import { VscChromeMaximize } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-8">
      <h4 className="pl-4">Calulator</h4>
      <div className="flex h-full">
        <div className="w-10 flex justify-center items-center">
          <VscChromeMaximize className="text-xl" />
        </div>
        <div className="w-10 flex justify-center items-center hover:bg-red-600">
          <RxCross2 className="text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
