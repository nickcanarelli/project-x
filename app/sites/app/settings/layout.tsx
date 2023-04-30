import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import getCurrentUser from "@actions/getCurrentUser";

export default async function SettingsLayout() {
  const currentUser = await getCurrentUser();
  console.log("currentUser", currentUser);
  return <div>Settings</div>;
}
