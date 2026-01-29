import Link from "next/link";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <div className="mx-auto w-full max-w-[1100px] px-6 md:px-12">
        {children}
      </div>
    </div>
  );
}
