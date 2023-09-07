import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import {
  Card,
  CardContent,
  Typography,
  Button,
  makeStyles,
  Container,
} from "@mui/material";

const GoogleSignup = () => {
  const responseGoogle = async (response) => {
    console.log("response: ", response);
    // try {
    //   // Send the Google OAuth token to your backend server
    //   const { tokenId } = response;
    //   const backendResponse = await fetch("http://localhost:3001/auth/google", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ tokenId }),
    //   });

    //   // console.log("backendResponse : ", backendResponse);

    //   if (backendResponse.ok) {
    //     console.log("Successfully authenticated with Google");
    //   } else {
    //     console.error("Authentication with Google failed");
    //   }
    // } catch (error) {
    //   console.error("Error while authenticating with Google:", error);
    // }
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
            clientId="497095083295-um2a987d5042tfn7okgome1rcei87crj.apps.googleusercontent.com"
            // clientId="11013940099-b1s7u09t7i4aecd3c8ddj1l4f3j32ftv.apps.googleusercontent.com"
            buttonText="Sign Up with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            redirectUri="http://localhost:3000/auth/google/callback"
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default GoogleSignup;

// import React, { useEffect } from "react";
// import { GoogleLogin } from "react-google-login";
// import { gapi } from "gapi-script";

// function GoogleSignup() {
//   useEffect(() => {
//     function start() {
//       gapi.client.init({
//         clientId:
//           "11013940099-b1s7u09t7i4aecd3c8ddj1l4f3j32ftv.apps.googleusercontent.com",
//         scope: "email",
//       });
//     }

//     gapi.load("client:auth2", start);
//   }, []);

//   // **you can access the token like this**
//   // const accessToken = gapi.auth.getToken().access_token;
//   // console.log(accessToken);

//   // const onSuccess = async (response) => {
//   //   console.log("response: ", response);
//   //   // const { tokenId } = response;
//   //   // try {
//   //   //   // Send the Google OAuth token to your backend server
//   //   //   // const { tokenId } = response;
//   //   //   const backendResponse = await fetch("http://localhost:3001/auth/google", {
//   //   //     method: "GET",
//   //   //     headers: {
//   //   //       "Content-Type": "application/json",
//   //   //     },
//   //   //     body: JSON.stringify({ accessToken }),
//   //   //   });

//   //   //   // console.log("backendResponse : ", backendResponse);

//   //   //   if (backendResponse.ok) {
//   //   //     console.log("Successfully authenticated with Google");
//   //   //   } else {
//   //   //     console.error("Authentication with Google failed");
//   //   //   }
//   //   // } catch (error) {
//   //   //   console.error("Error while authenticating with Google:", error);
//   //   // }
//   // };

//   const onSuccess = (response) => {
//     console.log("SUCCESS", response);
//   };
//   const onFailure = (response) => {
//     console.log("FAILED", response);
//   };

//   return (
//     <div>
//       <GoogleLogin
//         clientId="11013940099-b1s7u09t7i4aecd3c8ddj1l4f3j32ftv.apps.googleusercontent.com"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         accessType="offline" // Request offline access for refresh token
//         cookiePolicy={"single_host_origin"}
//         redirectUri="http://localhost:3000"
//       />
//     </div>
//   );
// }

// export default GoogleSignup;
