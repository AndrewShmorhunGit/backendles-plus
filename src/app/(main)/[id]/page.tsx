import { DynamicServerComponent } from "@/components/DynamicComponent";
import { Tab } from "@/types";
import { routes } from "@/utils/utils";
import React from "react";

export default function DynamicPage({ params }: { params: { id: string } }) {
  if (params) {
    const id = params.id;
    const route = routes.find((route) => route.id === id);
    if (route !== undefined) {
      const path = route.path;
      return <DynamicServerComponent path={path} />;
    }
  }
}
