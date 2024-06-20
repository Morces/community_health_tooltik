// components/Dashboard.js
"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import AppContext from "../_components/context/AppContext";
import TopNav from "../_components/Sidebar/TopBar";
import SideNav from "../_components/Sidebar/SideNav";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700", "600"],
});

export default function Dashboard({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        toggleSidebar,
      }}
    >
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
            className="flex flex-col h-screen overflow-y-hidden"
          >
            <div className="ml-24">
              <div className="mb-4">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}
