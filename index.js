// Load environment variables
import "dotenv/config";

// Import dependencies
import express from "express";
import { router } from "./src/router.js";

// Create app
const app = express();

// Add body parser
app.use(express.urlencoded({ extended: true })); // Parser les bodies de type "application/www-form-urlencoded"
app.use(express.json()); // Parser les bodies de type "application/json"

// Configure routes
app.use(router);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
