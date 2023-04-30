import getCurrentUser from "@actions/getCurrentUser";

export default async function AppIndex({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  console.log("currentUser", currentUser);
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="text-[80px] font-bold text-primary">
        {JSON.stringify(currentUser, null, 2)}
      </div>
      {children}
    </div>
  );
}
