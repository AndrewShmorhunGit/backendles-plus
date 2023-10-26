import { Tab } from "@/types";
import routes from "@/routs.config.json";

export function sortRouts(mixedRoutes: Tab[]): Tab[] {
  return mixedRoutes.sort((a: Tab, b: Tab) => a.order - b.order);
}
const sortedRoutes = sortRouts(routes);

export { sortedRoutes as routes };
