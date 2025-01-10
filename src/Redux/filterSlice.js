import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  Categorie: [],
  Brand: [],
  Colors: [],
  Discount: [],
  Gender: [],
  prices: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setFilterValues: async (state, action) => {
      const title = action.payload.title;
      state[title] = action.payload.values;
    },
    resetFilterValues: (state) => {
      state.Categorie = [];
      state.Brand = [];
      state.Colors = [];
      state.Discount = [];
      state.Gender = [];
    },
    removePaticularFilter: (state, action) => {
      const type = action.payload.type;
      const value = action.payload.value;
      console.log(type, value);
      state[type] = state[type]?.filter((item) => item.filterName !== value);
    },
    setPrice: (state, action) => {
      const obj = {
        filterName: `Rs. ${action.payload[0]} To Rs. ${action.payload[1]}`,
        isChecked: true,
      };
      state.prices = [obj];
    },
  },
});

//actions created by createSlice

export const {
  setFilterValues,
  resetFilterValues,
  removePaticularFilter,
  setPrice,
} = filterSlice.actions;

export default filterSlice.reducer;
