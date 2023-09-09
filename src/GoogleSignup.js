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
import axios from "axios";
import jwt_decode from "jwt-decode"; // Import the jwt-decode package

const GoogleSignup = () => {
  const handleGoogleSuccess = async (credentialResponse) => {
    console.log("credentialResponse", credentialResponse);
    const decodedToken = jwt_decode(credentialResponse.credential);
    console.log(decodedToken);
    const { credential } = credentialResponse;
    try {
      // Send the Google OAuth token to your backend server
      const backendResponse = await fetch("http://localhost:3001/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credential }),
      });

      console.log("backendResponse : ", backendResponse);

      if (backendResponse.ok) {
        console.log("Successfully authenticated with Google");
      } else {
        console.error("Authentication with Google failed");
      }
    } catch (error) {
      console.error("Error while authenticating with Google:", error);
    }
  };

  const handleGoogleError = () => {
    // Handle the error logic here
    console.log("Login Failed");
  };

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
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            redirectUri="http://localhost:3001/auth/google/callback"
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default GoogleSignup;
