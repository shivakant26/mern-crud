import React, { useEffect } from "react";
import { Button, Typography, TextField, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
const ProductForm = ({ onSubmit, formRef, editableData ,editableId }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  React.useImperativeHandle(formRef, () => ({
    reset,
  }));

  useEffect(() => {
    if (editableData) {
      setValue("productName", editableData?.productName);
      setValue("description", editableData?.description);
      setValue("price", editableData?.price);
      setValue("quantity", editableData?.quantity);
    } else {
      reset();
    }
  }, [editableData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5" marginBottom={3}>
        Product From
      </Typography>
      <Stack marginBottom={4} position={"relative"}>
        <TextField
          id="filled-basic"
          label="ProductName"
          variant="outlined"
          {...register("productName", {
            required: true,
          })}
          InputLabelProps={{ shrink: true }}
        />
        {errors?.productName?.type === "required" && (
          <p className="error">Required*</p>
        )}
      </Stack>
      <Stack marginBottom={4} position={"relative"}>
        <TextField
          id="filled-basic"
          label="Description"
          variant="outlined"
          {...register("description", {
            required: true,
          })}
          InputLabelProps={{ shrink: true }}
        />
        {errors?.description?.type === "required" && (
          <p className="error">Required*</p>
        )}
      </Stack>
      <Stack marginBottom={4} position={"relative"}>
        <TextField
          id="filled-basic"
          label="Price"
          variant="outlined"
          {...register("price", {
            required: true,
          })}
          InputLabelProps={{ shrink: true }}
        />
        {errors?.price?.type === "required" && (
          <p className="error">Required*</p>
        )}
      </Stack>
      <Stack marginBottom={4} position={"relative"}>
        <TextField
          id="filled-basic"
          label="Quantity"
          variant="outlined"
          {...register("quantity", {
            required: true,
          })}
          InputLabelProps={{ shrink: true }}
        />
        {errors?.quantity?.type === "required" && (
          <p className="error">Required*</p>
        )}
      </Stack>
      <Stack marginBottom={4} position={"relative"}>
        <Button variant="contained" type="submit">
         {editableId ? "Update Product" : "Create Product"} 
        </Button>
      </Stack>
    </form>
  );
};
export default ProductForm;
