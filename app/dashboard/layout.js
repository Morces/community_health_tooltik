"use client";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import AppContext from "../_components/context/AppContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700", "600"],
});

export default function Dashboard({ children }) {
  return (
    <AppContext.Provider value={{}}>
      <div
        className={cn(
          "flex min-h-screen overflown-y-hidden",
          poppins.className
        )}
      >
        <div className="flex-grow w-full">
          <main
            style={{
              background: "linear-gradient(180deg, #f0f2fd 0%, #fff8f9 100%)",
            }}
            className="m-5 flex flex-col overflow-y-hidden"
          >
            {children}
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}
