import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import t9ConvertService from "../../services/t9Convert";

export const convertT9Fetch = createAsyncThunk(
  "convertT9Fetch",
  async (numString, { rejectWithValue }) => {
    try {
      const response = await t9ConvertService(numString);
      return response;
    } catch (e) {
      console.log(e, "error"); // TODO : to create error handler
      return rejectWithValue("not found");
    }
  }
);

export const convertT9Slice = createSlice({
  name: "convertT9Store",
  initialState: {
    convertedList: "",
    isLoading: false,
    apiError: "",
  },
  reducers: {
    resetConvertT9Store: (state) => {
      state.apiError = "";
      state.convertedList = "";
    },
  },
  extraReducers: {
    [convertT9Fetch.pending]: (state) => {
      state.convertedList = "";
      state.apiError = "";
      state.isLoading = true;
    },
    [convertT9Fetch.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.convertedList = action.payload;
    },
    [convertT9Fetch.rejected]: (state, action) => {
      state.isLoading = false;
      state.apiError = action.payload;
    },
  },
});

export const selectConvertedList = (store) =>
  store.convertT9Store.convertedList;
export const selectIsLoading = (store) => store.convertT9Store.isLoading;
export const selectApiError = (store) => store.convertT9Store.apiError;

export const convertT9Actions = convertT9Slice.actions;

export default convertT9Slice.reducer;
