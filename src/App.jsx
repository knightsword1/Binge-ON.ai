import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

export default function App() {
  return <Provider store={appStore}><Body /></Provider>;
}
