import { createSlice } from "@reduxjs/toolkit";
import { deleteData, fetchData, postData, updateProducts } from "./action";

const initialState = {
  data: [],
  createData: [],
  deleteProduct : [],
  updateProductResp : [],
  loading: false,
  error: null,
};

const crudReducer = createSlice({
  name: "crud",
  initialState,
  reducers: {
    resetAction: (state) => {
      state.createData = [];
      state.deleteProduct = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postData.pending, (state) => {
        state.loading = true;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.loading = false;
        state.createData = action.payload;
      })
      .addCase(postData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteData.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteProduct = action.payload;
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.updateProductResp = action.payload;
      })
      .addCase(updateProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { resetAction } = crudReducer.actions;

export default crudReducer.reducer;
