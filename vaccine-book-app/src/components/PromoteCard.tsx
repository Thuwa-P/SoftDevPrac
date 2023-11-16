"use client";
import { useRef, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { useWindowListener } from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);
  const targetRef = useRef<HTMLDivElement>(null);
  useWindowListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
    },
    targetRef.current
  );
  return (
    <div
      className="w-[80%] shadow-lg mx-[10%] my-8 p-2 rounded-lg bg-green-200 flex flex-row"
      ref={targetRef}
    >
      <VideoPlayer
        vdoSrc="/video/getvaccine.mp4"
        isPlaying={playing}
        data-test-id="video"
      ></VideoPlayer>
      <div className="m-5 font-serif">
        <p className="font-semibold">Promoted Video</p>
        <button
          data-test-id="pauseButton"
          className="block rounded-md bg-slate-200 hover:bg-amber-700 hover:text-white px-3 py-2 text-black shadow-sm my-2"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
