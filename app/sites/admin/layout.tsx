import getCurrentUser from "@actions/getCurrentUser";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const currentUser = await getCurrentUser();
  // console.log("currentUser", currentUser);
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {children}
      <div className="text-secondary max-w-[600px]">
        {/* {JSON.stringify(currentUser, null, 2)} */}
      </div>
    </div>
  );
}
