"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
// import { SessionProvider } from "next-auth/react";

export function Providers({ children, session }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
