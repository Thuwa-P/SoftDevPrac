"use client";
import { Select, MenuItem } from "@mui/material";
import LocationDateReserve from "./LocationDateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { BookingItem } from "../../interfaces";
import { addBooking } from "@/redux/features/bookSlice";
export default function BookingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [hospital, setHospital] = useState("");
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const makeReservation = () => {
    if (firstName && lastName && nationalId && hospital && bookingDate) {
      const item: BookingItem = {
        firstName: firstName,
        lastName: lastName,
        ssId: nationalId,
        hospital: hospital,
        date: dayjs(bookingDate).format("DD/MM/YYYY"),
      };
      dispatch(addBooking(item));
      alert("Vaccine is booked. !!!!");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto border-double border-4 border-slate-700 border-spacing-2 rounded-sm  p-4 bg-blue-200">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Your Name"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Your Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-id"
          >
            National ID
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-id"
            type="text"
            placeholder="1234567891011"
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-hospital"
          >
            Hospital
          </label>
          <Select
            variant="standard"
            name="hospital"
            id="grid-hospital"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
          >
            <MenuItem value="Chulalongkorn Hospital">
              Chulalongkorn Hospital
            </MenuItem>
            <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
            <MenuItem value="Thammasat University Hospital">
              Thammasat University Hospital
            </MenuItem>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <LocationDateReserve
          onDateChange={(value: Dayjs) => {
            setBookingDate(value);
          }}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={makeReservation}
          >
            Reserve the Vaccine
          </button>
        </div>
      </div>
    </div>
  );
}
