import db from "../db.js";

// Get all users
export const getUsers = (req, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
}

// Get a single user by ID
export const getUser = (req, res) => {
    const q = "SELECT * FROM users WHERE id = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data[0]);
    });
};

// Create a new user
export const createUser = (req, res) => {
    const { name, email, phone, address } = req.body;
    db.query("INSERT INTO users (name, phone, email, address) VALUES (?, ?, ?, ?)", 
        [name, phone, email, address], 
        (err, data) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ id: data.insertId, name, email, phone, address });
        }
    );
};

// Update an existing user
export const updateUser = (req, res) => {
    const { name, email, phone, address } = req.body;
    db.query("UPDATE users SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?", 
        [name, email, phone, address, req.params.id], 
        (err, data) => {
            if (err) return res.status(500).send(err);
            res.status(200).json({ id: req.params.id, name, email, phone, address });
        }
    );
};

// Delete a user
export const deleteUser = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ message: "User deleted successfully." });
        }
    );
};
