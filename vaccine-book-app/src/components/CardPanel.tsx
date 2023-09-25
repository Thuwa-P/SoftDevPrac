"use client";
import { useReducer } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function CardPanel() {
  const rateReducer = (
    ratingList: Map<string, number>,
    action: { type: string; hospitalName: string; rating: number }
  ) => {
    switch (action.type) {
      case "add": {
        ratingList.set(action.hospitalName, action.rating);
        return new Map(ratingList);
      }
      case "remove": {
        ratingList.set(action.hospitalName, 0);
        ratingList.delete(action.hospitalName);
        return new Map(ratingList);
      }
      default:
        return ratingList;
    }
  };
  const [ratingList, dispatchCompare] = useReducer(
    rateReducer,
    new Map<string, number>()
  );
  /**Mock Data */
  const mockHospitalRepo = [
    { hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg" },
    { hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg" },
    {
      hid: "003",
      name: "Thammasat university Hospital",
      image: "/img/thammasat.jpg",
    },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {mockHospitalRepo.map((hospitalItem) => (
          <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
            <ProductCard
              hospitalName={hospitalItem.name}
              imgSrc={hospitalItem.image}
              hospitalRating={ratingList.get(hospitalItem.name) || 0}
              onCompare={(hospital: string, rate: number) =>
                dispatchCompare({
                  type: "add",
                  hospitalName: hospital,
                  rating: rate,
                })
              }
            />
          </Link>
        ))}
      </div>
      <div className="w-full text-xl font-medium my-5">
        Rating {ratingList.size}
      </div>
      {Array.from(ratingList).map(([hospital, rating]) => (
        <div
          key={hospital}
          onClick={() =>
            dispatchCompare({
              type: "remove",
              hospitalName: hospital,
              rating: 0,
            })
          }
        >
          {hospital} Rating = {rating}
        </div>
      ))}
    </div>
  );
}
