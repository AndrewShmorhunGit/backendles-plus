import React from "react";
import { Spinner } from "./lib/Spinner";

export function DynamicServerComponent({ path }: { path: string }) {
  console.log(path);

  const renderDynamicPage = (path: string) => {
    const Component = React.lazy(() => import(`@/components/pages/${path}`));
    return (
      <React.Suspense fallback={<Spinner />}>
        <Component />
      </React.Suspense>
    );
  };

  return renderDynamicPage(path);
}
