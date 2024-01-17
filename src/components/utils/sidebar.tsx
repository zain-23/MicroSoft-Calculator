import { IoCodeSharp } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineScience } from "react-icons/md";
import { IoCalculatorOutline } from "react-icons/io5";

interface list {
  text: string;
  icon: JSX.Element;
}

export const Sidebar = ({ sidebarOpen }: any) => {
  const caculator: Array<list> = [
    {
      text: "Standard",
      icon: <IoCalculatorOutline />,
    },
    {
      text: "Scientific",
      icon: <MdOutlineScience />,
    },
    {
      text: "Programmer",
      icon: <IoCodeSharp />,
    },
    {
      text: "Date Calculation",
      icon: <MdOutlineDateRange />,
    },
  ];
  const converter: Array<list> = [
    {
      text: "Currency",
      icon: <IoCalculatorOutline />,
    },
    {
      text: "Volume",
      icon: <IoCalculatorOutline />,
    },
    {
      text: "Length",
      icon: <IoCalculatorOutline />,
    },
    {
      text: "Weight and mass",
      icon: <IoCalculatorOutline />,
    },
    {
      text: "Temperture",
      icon: <IoCalculatorOutline />,
    },
    {
      text: "Energy",
      icon: <IoCalculatorOutline />,
    },
    {
      text: "Area",
      icon: <IoCalculatorOutline />,
    },
    {
      text: "Speed",
      icon: <IoCalculatorOutline />,
    },
    {
      text: "Time",
      icon: <IoCalculatorOutline />,
    },
    {
      text: "Power",
      icon: <IoCalculatorOutline />,
    },
    {
      text: "Data",
      icon: <IoCalculatorOutline />,
    },
    {
      text: "Pressure",
      icon: <IoCalculatorOutline />,
    },
    {
      text: "Angle",
      icon: <IoCalculatorOutline />,
    },
  ];
  return (
    <aside
      className={`w-60 h-[398px] rounded-tr-xl rounded-br-xl absolute top-0 left-0 bg-[var(--sidebar-color)] z-[1] shadow-2xl duration-300 ease-in-out flex items-center ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="fixed top-0 left-0 w-full h-12"></div>
      <div className="w-full h-[74%] overflow-x-auto p-1">
        <div className="mt-3">
          <h4 className="px-3">Calulator</h4>
          {caculator.map((item: list, index: number) => (
            <div
              className="px-5 py-3 hover:bg-[var(--hover-color)] rounded-md cursor-pointer mt-1 flex items-center gap-x-3"
              key={index}
            >
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>
        <div className="mt-3">
          <h4 className="px-3">Converter</h4>
          {converter.map((item: list, index: number) => (
            <div className="px-5 py-3 hover:bg-[var(--hover-color)] rounded-md cursor-pointer mt-1 flex items-center gap-x-3">
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-14 rounded-br-xl flex items-end p-1">
        <div className="hover:bg-[var(--hover-color)] px-4 py-2 w-full rounded-md">
          Settings
        </div>
      </div>
    </aside>
  );
};
