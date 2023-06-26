import { TypeRootState } from "@/redux/store";

export const selectFilterModule = (state: TypeRootState) => state.filter;

export const selectTitle = (state: TypeRootState) => selectFilterModule(state).title;
export const selectGenre = (state: TypeRootState) => selectFilterModule(state).genre;
export const selectCinema = (state: TypeRootState) => selectFilterModule(state).cinema;
