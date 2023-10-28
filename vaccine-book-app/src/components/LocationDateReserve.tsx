"use client";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useState } from "react";

export default function LocationDateReserve({
  onDateChange,
}: {
  onDateChange: Function;
}) {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);

  return (
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-date-reserve"
      >
        Reservation Date
      </label>
      <div id="grid-date-reserve">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={reserveDate}
            onChange={(value) => {
              setReserveDate(value);
              onDateChange(value);
            }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}
