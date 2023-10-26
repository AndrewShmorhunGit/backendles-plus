import { redirect } from "next/navigation";
import { routes } from "@/utils/utils";
export default async function Home() {
  redirect(`/${routes[0].id}`);
}
