import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "...",
  icons: {
    icon: "/icons/taekwondo.png",
  },
};

export default function HomePage() {
  // throw new Error("Something went wrong");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
    </main>
  );
}
