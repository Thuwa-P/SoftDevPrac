import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div dir="rtl">
      <div className="h-[100px] bg-white sticky top-0 right-0 left-0 z-30 border-y-1 border-indigo-500/50 flex flex-row">
        <Image
          src="/img/medical-logo.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
          className="h-full w-fit"
        ></Image>
        <TopMenuItem title="Booking" pageRef="/booking"></TopMenuItem>
        {session ? (
          <Link href="/api/auth/signout">
            <div className="flex items-center absolute left-0 h-full text-slate-500 text-base px-2">
              Sign-Out of {session.user?.name}
            </div>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <div className="flex items-center absolute left-0 h-full text-slate-500 text-base px-2">
              Sign-In
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
