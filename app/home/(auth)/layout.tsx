export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full">
      <div className="m-4 flex w-full max-w-[728px] flex-1 flex-col justify-center rounded-2xl bg-surface lg:flex-none ">
        <div className="mx-auto w-full max-w-[360px] lg:w-[360px]">
          {children}
        </div>
      </div>
    </div>
  );
}
