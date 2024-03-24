import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const updatedData = createAsyncThunk(
    "updatedData",
    async (data, { rejectWithValue }) => {
      const response = await fetch(
        `https://65fe7737b2a18489b3861486.mockapi.io/CRUD/${data.id}`,
        {
          method: "PUT",
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
  const updateData = createSlice({
    name: "updateData",
    initialState: {
      users: [],
      isLoading: true,
      isError: null,
    },
  //   reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(updatedData.pending, (state) => {
          // Handle pending action
          state.isLoading = true;
        })
        .addCase(updatedData.fulfilled, (state, action) => {
          // Handle fulfilled action
          state.isLoading = false;
          state.users.push(action.payload);
        })
        .addCase(updatedData.rejected, (state, action) => {
          // Handle rejected action
          state.isLoading = false;
          state.isError = action.payload;
        });
    },
  });
  export default updateData.reducer;