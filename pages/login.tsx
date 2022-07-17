import { Box, Button, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "components/Visit/slice";
import axios from "axios";
import { storeAuthToken } from "utils/authTokenHandler";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    try {
      const res = await axios.post("http://localhost:2000/user/login", data);
      if (res.status === 200) {
        const { data } = res.data;
        storeAuthToken(data.token);
        dispatch({ type: login, payload: data });
        reset();
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Container maxWidth="xs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={2}>
            <TextField
              type="email"
              variant="outlined"
              fullWidth
              {...register("email")}
              label="Email"
            />
          </Box>
          <Box mb={2}>
            <TextField
              type="password"
              variant="outlined"
              fullWidth
              {...register("password")}
              label="Password"
            />
          </Box>
          <Button type="submit" fullWidth variant="contained">
            Login
          </Button>
        </form>
      </Container>
    </Grid>
  );
};

export default Login;
