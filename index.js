// Load environment variables
import "dotenv/config";

// Import dependencies
import express from "express";
import { router } from "./src/router.js";

// Create app
const app = express();

// Configure routes
app.use(router);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
