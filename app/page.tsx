import { DataTableDemo } from "./table";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function Home() {
  return (
    <NuqsAdapter>
      <DataTableDemo />
    </NuqsAdapter>
  );
}
