import { RootStore } from "./root.store";
import { createClient } from "../network/createClient.function";
import React, { useContext } from "react";

const RootStoreContext = React.createContext(new RootStore(createClient()))

export const useRootStore = () => useContext(RootStoreContext);