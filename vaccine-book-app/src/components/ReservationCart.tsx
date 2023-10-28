"use client";
import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function ReservationCart() {
  const vaccineItems = useAppSelector((state) => state.bookSlice.bookItem);
  const dispatch = useDispatch<AppDispatch>();
  console.log(vaccineItems);
  return (
    <>
      {vaccineItems.map((reservationItem) => {
        return (
          <div className="bg-teal-200 rounded px-5 mx-5 py-2 my-2">
            <div className="flex flex-row text-xl">
              <div>
                Name : {reservationItem.firstName} {reservationItem.lastName}
              </div>
            </div>
            <div className="text-xl">National ID : {reservationItem.ssId}</div>
            <div className="text-xl">Hospital : {reservationItem.hospital}</div>
            <div className="text-xl">Date : {reservationItem.date}</div>
            <button
              className="bg-white text-teal-500 border border-teal-500 font-semibold py-2 px-4 m-4 rounded z-30  hover:bg-teal-500 hover:text-white hover:border-transparent"
              onClick={() => {
                dispatch(removeBooking(reservationItem));
              }}
            >
              Cancel Booking
            </button>
          </div>
        );
      })}
    </>
  );
}
