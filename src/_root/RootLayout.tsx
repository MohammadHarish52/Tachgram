import BottomBar from "@/components/shared/BottomBar";
import Leftsidebar from "@/components/shared/Leftsidebar";
import TopBar from "@/components/shared/TopBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <TopBar />
      <Leftsidebar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <BottomBar />
    </div>
  );
};

export default RootLayout;
