import { createAsyncThunk } from "@reduxjs/toolkit";
import Instance from "../services/apiConfig";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
    try {
        const response = await Instance.get("/product");
        return response.data;
    } catch (error) {
        return errors
    }
});

export const postData = createAsyncThunk("data/postData", async (data) => {
    try {
        const response = await Instance.post("/product",data);
        return response;   
    } catch (error) {
        return errors
    }
});

export const deleteData = createAsyncThunk("data/deleteData", async (id) => {
    try {
        const response = await Instance.delete(`/product/${id}`);
        return response;   
    } catch (error) {
        return errors
    }
});

export const updateProducts = createAsyncThunk("data/updateProducts", async (data) => {
    const { id, ...remainingFields } = data;
    try {
        const response = await Instance.put(`/product/${id}`,remainingFields);
        return response;   
    } catch (error) {
        return errors
    }
});

