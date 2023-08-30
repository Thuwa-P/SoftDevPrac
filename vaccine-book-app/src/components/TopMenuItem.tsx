import Link from "next/link";

export default function TopMenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <Link
      className="w-[120px] text-center my-auto font-mono text-base text-slate-500"
      href={pageRef}
    >
      {title}
    </Link>
  );
}
