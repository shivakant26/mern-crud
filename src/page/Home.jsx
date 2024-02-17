import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData, postData, updateProducts } from "../redux/action";
import ProductTable from "../component/ProductTable";
import ProductForm from "../component/ProductForm";
import { resetAction } from "../redux/crudSlice";
import { toast } from "react-toastify";

const Home = () => {
  const formRef = useRef(null);
  const [editableData, setEditableData] = useState();
  const [editableId, setEditableId] = useState();

  const dispatch = useDispatch();
  const { data, loading, createData, deleteProduct, updateProductResp, error } = useSelector(
    (state) => state.crud
  );
  const { status } = createData;
  console.log(updateProductResp);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (status === 201) {
      toast.success("🦄create Data succussfully", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
      dispatch(fetchData());
      dispatch(resetAction());
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [createData, status]);

  useEffect(() => {
    if (deleteProduct?.status === 200) {
      toast.error("delete Data succussfully", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
      dispatch(fetchData());
      dispatch(resetAction());
    }
  }, [deleteProduct, data]);

  useEffect(()=>{
    if(updateProductResp.status === 200){
      toast.success("🦄Update Data succussfully", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
      });
      dispatch(fetchData());
      dispatch(resetAction());
    }
  },[updateProductResp.status])

  const onSubmit = (data) => {
    if(editableId){
      data.id = editableId;
      dispatch(updateProducts(data))
      setEditableData("")
      setEditableId("");
    }else{
      dispatch(postData(data));
    }
    reset();
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  const handleEdit = (item) => {
    setEditableData(item);
    setEditableId(item._id)
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Product Crud App
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box as="div">
        <Container>
          <Grid container spacing={2} marginTop={5}>
            <Grid item xs={4}>
              <ProductForm
                onSubmit={onSubmit}
                formRef={formRef}
                editableData={editableData}
                editableId = {editableId}
              />
            </Grid>
            <Grid item xs={8}>
              <ProductTable
                data={data}
                loading={loading}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default Home;
