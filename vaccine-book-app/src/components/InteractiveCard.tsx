"use client";

export default function InteractiveCard({
  children,
  contentName,
}: {
  children: React.ReactNode;
  contentName: string;
}) {
  function onCardSelected() {
    alert("You Select " + contentName);
  }

  return (
    <div className="w-1/5 h-[300px] rounded-lg shadow-lg hover:bg-neutral-200 hover:shadow-2xl ">
      {children}
    </div>
  );
}
