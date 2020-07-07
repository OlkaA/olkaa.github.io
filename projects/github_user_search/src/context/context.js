import React from "react";

export const contextState = {
  users: [],
  userName: "",
  isLoading: false,
  errorText: "",
};

export const StateContext = React.createContext({
  contextState: contextState,
});
