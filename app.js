const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const PORT = 3000;

app.use(cors());
app.use(express.json());

const API_BASE = "https://api-books-ac3j.onrender.com";

app.get("/", (req, res) => {
  res.send("Books Collection Backend is running");
});

app.get("/users", async (req, res) => {
  try {
    const { data } = await axios.get(`${API_BASE}/users`);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.get("/books", async (req, res) => {
  try {
    const { data } = await axios.get(`${API_BASE}/books`);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
