import Link from "next/link";
import Item from "./Item";

interface LateralNavProps {
  transparent?: boolean;
}

const LateralNav = ({ transparent = false }: LateralNavProps) => {
  const bgColor = transparent ? "" : "bg-bg-200";
  return (
    <div
      className={`hidden w-[300px] md:block ${bgColor} m-0 border-r border-primary-600 p-3`}
    >
      <Item title="Comenzando"></Item>
      <div className="flex h-full">
        <div className="h-5 w-1 bg-accent-300"></div>
        <div className={`flex h-full flex-1 flex-col pl-4`}>
          <span className="font-medium text-primary-300 underline underline-offset-4">
            ¿Qué es Axum?
          </span>
          <span className="font-normal text-gray-200">Test</span>
          <span className="font-normal text-gray-200">Test</span>
          <span className="font-normal text-gray-200">Test</span>
          <Link
            className="font-normal text-gray-200 underline-offset-4 hover:text-gray-100 hover:underline"
            href="/menu"
          >
            Menu
          </Link>
          <Link
            className="font-normal text-gray-200 underline-offset-4 hover:text-gray-100 hover:underline"
            href="/calendar"
          >
            Calendar
          </Link>
          <Link
            className="font-normal text-gray-200 underline-offset-4 hover:text-gray-100 hover:underline"
            href="/mobile"
          >
            Mobile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LateralNav;
