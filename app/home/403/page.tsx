import Link from "next/link";
import React from "react";

export default function Custom403() {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="my-4 text-center">
            <h1 className="text-2xl">403 - Unauthorized</h1>
            <p className="">Please login as admin</p>
          </div>
          <Link className="btn btn-primary" href="/signin">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
