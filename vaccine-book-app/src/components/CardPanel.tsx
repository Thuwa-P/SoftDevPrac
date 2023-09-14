"use client";
import { useReducer } from "react";
import ProductCard from "./ProductCard";

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

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <ProductCard
          hospitalName="Chulalongkorn Hospital"
          imgSrc="/img/chula.jpg"
          hospitalRating={ratingList.get("Chulalongkorn Hospital") || 0}
          onCompare={(hospital: string, rate: number) =>
            dispatchCompare({
              type: "add",
              hospitalName: hospital,
              rating: rate,
            })
          }
        ></ProductCard>
        <ProductCard
          hospitalName="Rajavithi Hospital"
          imgSrc="/img/rajavithi.jpg"
          hospitalRating={ratingList.get("Rajavithi Hospital") || 0}
          onCompare={(hospital: string, rate: number) =>
            dispatchCompare({
              type: "add",
              hospitalName: hospital,
              rating: rate,
            })
          }
        ></ProductCard>
        <ProductCard
          hospitalName="Thammasat University Hospital"
          imgSrc="/img/thammasat.jpg"
          hospitalRating={ratingList.get("Thammasat University Hospital") || 0}
          onCompare={(hospital: string, rate: number) =>
            dispatchCompare({
              type: "add",
              hospitalName: hospital,
              rating: rate,
            })
          }
        ></ProductCard>
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
