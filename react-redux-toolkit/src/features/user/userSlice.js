import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// fetchUsers thunk
// createAsyncThunk will automatically dispatch life cycle actions based on the returned promise
// Generates pending, fulfilled and rejected action types
// the redcuers though are not generated by slice, will need to create
// RTK uses immer, redux-thunk etc library under the hood
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((user) => user.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer; // Defaul export
const _fetchUsers = fetchUsers;
export { _fetchUsers as fetchUsers }; // Named export