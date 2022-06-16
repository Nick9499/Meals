import { configureStore } from "@reduxjs/toolkit";
import favouritesReducers from "./favourites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favouritesReducers,
  },
});
