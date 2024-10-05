import { HydrateClient } from "@bwsite/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1 className="text-6xl font-bold">Welcome to Create T3 App</h1>
      </main>
    </HydrateClient>
  );
}
