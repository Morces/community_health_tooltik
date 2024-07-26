"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "../../lib/utils";
import TopNav from "../_components/Sidebar/TopBar";
import SideNav from "../_components/Sidebar/SideNav";
import useApp from "../_components/hooks/useApp";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import beatAnmimation from "../_components/table/utils/loading.json";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700", "600"],
});

export default function Dashboard({ children }) {
  const { isSidebarOpen, toggleSidebar } = useApp();
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="" style={{ width: "7em" }}>
          <Lottie animationData={beatAnmimation} />
        </div>
      </div>
    );
  }

  if (!session) {
    router.push("/");
  }

  return (
    <div
      className={cn("flex min-h-screen overflow-y-hidden", poppins.className)}
    >
      <SideNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-grow w-full">
        <TopNav toggleSidebar={toggleSidebar} />
        <main
          style={{
            background: "linear-gradient(180deg, #f0f2fd 0%, #fff8f9 100%)",
          }}
          className="flex flex-col h-full overflow-y-hidden"
        >
          <div className="ml-24 mb-4 mt-24  max-md:ml-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
