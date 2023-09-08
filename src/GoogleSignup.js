import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import {
  Card,
  CardContent,
  Typography,
  Button,
  makeStyles,
  Container,
} from "@mui/material";

const GoogleSignup = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        style={{
          minWidth: 300,
          maxWidth: 400,
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Sign Up with Google
          </Typography>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default GoogleSignup;
