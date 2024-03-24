import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postData = createAsyncThunk(
  "postData",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://65fe7737b2a18489b3861486.mockapi.io/CRUD",
      {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const createData = createSlice({
  name: "createData",
  initialState: {
    users: [],
    isLoading:false,
    isError: null,
  },
//   reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postData.pending, (state) => {
        // Handle pending action
        state.isLoading = true;
      })
      .addCase(postData.fulfilled, (state, action) => {
        // Handle fulfilled action
        state.isLoading = false;
        state.users.push(action.payload);
      })
      .addCase(postData.rejected, (state, action) => {
        // Handle rejected action
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});
export default createData.reducer;
