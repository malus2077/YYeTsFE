/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserGroup } from "API";

interface UserState {
  username: string;
  group: Array<UserGroup>;
  accessToken: string;
}

const initialState: UserState = {
  username: localStorage.getItem("username") || "",
  group: ["user"],
  accessToken: localStorage.getItem("accessToken") || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, { payload: { username, group,accessToken } }: PayloadAction<UserState>) => {
      state.username = username;
      state.group = group;
      state.accessToken = accessToken;
    },
  },
});

export const { setUsername } = userSlice.actions;
export const userReducer = userSlice.reducer;
