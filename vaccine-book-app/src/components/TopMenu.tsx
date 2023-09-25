import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
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
      </div>
    </div>
  );
}
