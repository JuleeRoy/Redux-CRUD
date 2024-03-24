import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    console.log(id);
    const response = await fetch(
      `https://65fe7737b2a18489b3861486.mockapi.io/CRUD/${id}`,
      {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        // No need to include body for DELETE request
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

const deleteData = createSlice({
  name: "deleteData",
  initialState: {
    users: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        // Remove the deleted user from the state
        state.users = state.users.filter(user => user.id !== action.payload.id);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export default deleteData.reducer;
