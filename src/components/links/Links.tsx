import { routes } from "@/utils/utils";
import Link from "next/link";

export async function Links() {
  return (
    <div className="tab-navigation">
      {routes.map((route) => {
        const { id, title, order } = route;
        return (
          <Link
            href={id}
            key={id}
            target={order > 2 ? "_blank" : ""}
            rel={order > 2 ? "noopener noreferrer" : ""}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
}
