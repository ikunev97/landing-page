import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItemsRespond } from "../../types";

export type ItemsState = {
  items: IItemsRespond;
  isLoading: boolean;
  hasError: string;
};

const emptyState = {
  items: {
    main_menu: [],
    hero: {
      title: "",
      description: "",
      buttonLabel: "",
      buttonUrl: "",
      image: "",
    },
    services: {
      title: "",
      description: "",
      items: [],
      buttonLabel: "",
      buttonUrl: "",
    },
    portfolio: { title: "", description: "", items: [] },
    agency_services: { title: "", items: [] },
    company_data: {
      address: "",
      phone: "",
      email: "",
      logo: "",
      name: "",
      intro: "",
      socialMedia: {
        facebook: "",
        instagram: "",
        linkedin: "",
        twitter: "",
      },
    },
    footer_menu: [],
  },
};

const initialState: ItemsState = {
  items: emptyState.items,
  isLoading: false,
  hasError: "",
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setItems: (state, action: PayloadAction<IItemsRespond>) => {
      state.isLoading = false;
      state.hasError = "";
      state.items = action.payload;
    },

    setError: (state, action: PayloadAction<string>) => {
      state.hasError = action.payload;
      state.items = emptyState.items;
    },
  },
});

export const { setLoading, setItems, setError } = itemsSlice.actions;

export default itemsSlice.reducer;
