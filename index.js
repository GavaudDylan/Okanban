// Load environment variables
import "dotenv/config";

// Import dependencies
import express from "express";

// Create app
const app = express();

// Configure routes
app.get("/", (req, res) => {
  res.send("OK");
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
