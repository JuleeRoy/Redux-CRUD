import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk(
    "getData",
    async (data, { rejectWithValue }) => {
      const response = await fetch(
        "https://65fe7737b2a18489b3861486.mockapi.io/CRUD",
        {
          method: "GET",
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
const readData = createSlice({
    name: "readData",
    initialState: {
      users: [],
      isLoading: true,
      isError: null,
    },
  //   reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getData.pending, (state) => {
          // Handle pending action
          state.isLoading = true;
        })
        .addCase(getData.fulfilled, (state, action) => {
          // Handle fulfilled action
          state.isLoading = false;
          state.users = action.payload;
        })
        .addCase(getData.rejected, (state, action) => {
          // Handle rejected action
          state.isLoading = false;
          state.isError = action.payload.error;
        });
    },
  });
  export default readData.reducer;