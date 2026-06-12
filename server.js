const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

/* =======================
   HOME ROUTE
======================= */
app.get("/", (req, res) => {
    res.send("CloudTask API Running by Fortune 🚀");
});

/* =======================
   HEALTH CHECK
======================= */
app.get("/api/health", (req, res) => {
    res.json({
        status: "CloudTask API by Fortune is healthy"
    });
});

/* =======================
   GET ALL USERS
======================= */
app.get("/users", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM users");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

/* =======================
   CREATE USER
======================= */
app.post("/users", async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                error: "Name and email are required"
            });
        }

        const [result] = await db.query(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            [name, email]
        );

        res.status(201).json({
            message: "User created successfully",
            userId: result.insertId
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

/* =======================
   UPDATE USER
======================= */
app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const [result] = await db.query(
            "UPDATE users SET name = ?, email = ? WHERE id = ?",
            [name, email, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({
            message: "User updated successfully"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

/* =======================
   DELETE USER
======================= */
app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.query(
            "DELETE FROM users WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({
            message: "User deleted successfully"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

/* =======================
   START SERVER
======================= */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Fortune's server running on port ${PORT}`);
});