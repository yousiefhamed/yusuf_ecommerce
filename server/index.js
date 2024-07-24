const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Get users
app.get("/api/users", (req, res) => {
  fs.readFile("./../data/users.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error fetching users" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Add user
app.post("/api/users", (req, res) => {
  const user = req.body;

  fs.readFile("./../data/users.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error fetching users" });
    } else {
      const users = JSON.parse(data);
      users.push(user);
      fs.writeFile("./../data/users.json", JSON.stringify(users), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: "Error adding user" });
        } else {
          res.json(user);
        }
      });
    }
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
