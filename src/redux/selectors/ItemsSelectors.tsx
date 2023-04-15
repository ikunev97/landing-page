import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectContent = (state: RootState) => state;

export const selectIsLoading = createSelector(
  selectContent,
  (content) => content.itemsReducer.isLoading
);

export const selectHasError = createSelector(
  selectContent,
  (content) => content.itemsReducer.hasError
);

export const selectMainMenu = createSelector(
  selectContent,
  (content) => content.itemsReducer.items.main_menu
);

export const selectHero = createSelector(
  selectContent,
  (content) => content.itemsReducer.items.hero
);

export const selectServices = createSelector(
  selectContent,
  (content) => content.itemsReducer.items.services
);

export const selectPortoflio = createSelector(
  selectContent,
  (content) => content.itemsReducer.items.portfolio
);

export const selectAgencyServices = createSelector(
  selectContent,
  (content) => content.itemsReducer.items.agency_services
);

export const selectCompanyData = createSelector(
  selectContent,
  (content) => content.itemsReducer.items.company_data
);

export const selectFooterMenu = createSelector(
  selectContent,
  (content) => content.itemsReducer.items.footer_menu
);
