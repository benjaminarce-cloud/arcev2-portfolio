export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <div className="mx-auto w-full max-w-[980px] px-6 md:px-10">
        {children}
      </div>
    </div>
  );
}
