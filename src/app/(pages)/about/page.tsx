import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Aplikasi Aing",
  authors: [{ name: "Sandi Arba Putra", url: "http://localhost:3000" }],
  // icons: {
  //   icon: "/icons/taekwondo.png",
  // },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About Page</h1>
    </div>
  );
}
