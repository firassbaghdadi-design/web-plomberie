import { Navigation } from "@/components/Navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-5xl px-4 pb-32 pt-6 sm:px-6 md:pb-16 md:pt-10">{children}</main>
    </>
  );
}
