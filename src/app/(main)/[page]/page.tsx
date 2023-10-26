import { DynamicServerComponent } from "@/components/DynamicComponent";
import { Tab } from "@/types";
import { routes } from "@/utils/utils";
import React from "react";

export default function DynamicPage({ params }) {
  if (params) {
    const page = params.page;
    const path = (routes.find((route) => route.id === page) as Tab).path;
    return <DynamicServerComponent path={path} />;
  }
}
