import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookState = {
  bookItem: BookingItem[];
};

const initialState: BookState = { bookItem: [] };

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      //console.log(state.bookItem);
      const allItem = state.bookItem.filter((obj) => {
        return false;
      });
      state.bookItem = allItem;
      state.bookItem.push(action.payload);
      //console.log(state.bookItem);
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      const removedItem: BookingItem[] = [];
      state.bookItem = removedItem;
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
