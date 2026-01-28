export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <div className="mx-auto w-full max-w-[1120px] px-7 md:px-14">
        {children}
      </div>
    </div>
  );
}
