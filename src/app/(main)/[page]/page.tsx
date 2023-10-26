"use client";

import { DynamicServerComponent } from "@/components/DynamicServerComponent";
import { Tab } from "@/types";
import { routes } from "@/utils/utils";
import { usePathname } from "next/navigation";
import React from "react";

export default function DynamicPage() {
  const pathname = usePathname();
  const id = pathname.slice(1);
  const path = (routes.find((route) => route.id === id) as Tab).path;

  return <DynamicServerComponent path={path} />;
}
