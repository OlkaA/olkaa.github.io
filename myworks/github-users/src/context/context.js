import React from "react";
//import * as API from "../api/index";

export const contextState = {
  users: [],
  userName: '',
  isLoading: false,
  errorText: ''
};

export const StateContext = React.createContext({
  contextState: contextState // default value
});
