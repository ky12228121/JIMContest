import store from "./src/Stores/Store";
import { AnyAction, Reducer } from "@reduxjs/toolkit";

type StoreState = {
  [key in keyof typeof store]: typeof store[key] extends Reducer<infer T, AnyAction> ? T : never;
};

declare module "react-redux" {
  interface DefaultRootState extends StoreState {}
}
