const express = require("express");
const session = require("express-session");
const cors = require("cors");
const { google } = require("googleapis");

const app = express();
const port = 3001;

app.use(cors());
app.use(
  session({
    secret: "khan",
    resave: false,
    saveUninitialized: true,
  })
);

// Configure the OAuth 2.0 client
const oauth2Client = new google.auth.OAuth2(
  "497095083295-um2a987d5042tfn7okgome1rcei87crj.apps.googleusercontent.com",
  "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",
  "http://localhost:3000"
);

// Define the Google Analytics API version and scopes
const analytics = google.analytics("v3");
const scopes = ["https://www.googleapis.com/auth/analytics.readonly"];

// Define the route for initiating the OAuth flow
app.post("/auth/google", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
  console.log("url: ", url);
  res.redirect(url);
});

// Handle the OAuth callback
app.get("/auth/google/callback", async (req, res) => {
  const code = req.query.code;
  console.log("code: ", code);
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  req.session.tokens = tokens; // Store the tokens in the session
  res.redirect("/analytics");
});

// Define a route to fetch Google Analytics data
app.get("/analytics", async (req, res) => {
  console.log("analytics");
  try {
    const result = await analytics.data.ga.get({
      auth: oauth2Client,
      ids: "358239987", // Replace with your Google Analytics view ID
      "start-date": "7daysAgo",
      "end-date": "today",
      metrics: "ga:sessions,ga:pageviews",
    });

    const data = result.data;
    res.json(data);
  } catch (error) {
    res.status(500).send("Error fetching data from Google Analytics");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
