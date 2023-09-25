import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating, Typography } from "@mui/material";
import { useState } from "react";

export default function ProductCard({
  hospitalName,
  imgSrc,
  onCompare,
  hospitalRating,
}: {
  hospitalName: string;
  imgSrc: string;
  onCompare: Function;
  hospitalRating: number;
}) {
  return (
    <InteractiveCard contentName={hospitalName}>
      <div className="w-full h-[55%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="vaccine-card"
          fill={true}
          objectFit="cover"
          className="object-cover rounded-t-lg"
        ></Image>
      </div>
      <div className="w-full h-[15%] p-[10px]">{hospitalName}</div>
      <Typography component="legend">Rating</Typography>
      <Rating
        value={hospitalRating}
        onChange={(event, hospitalRating) => {
          event.preventDefault();
          event.stopPropagation();
          onCompare(hospitalName, hospitalRating);
        }}
      ></Rating>
    </InteractiveCard>
  );
}
