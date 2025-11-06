import db from "../db.js";

// Get all products
export const getProducts = (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};

// Get a single product by ID
export const getProduct = (req, res) => {
    const q = "SELECT * FROM products WHERE id = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data[0]);
    });
};

// Create a new product
export const createProduct = (req, res) => {
    const { name, price } = req.body;
    console.log(name, price);
    db.query("INSERT INTO products (name, price) VALUES (?, ?)", 
        [name, price], 
        (err, data) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ id: data.insertId, name, price });
        }
    );
};

// Update an existing product
export const updateProduct = (req, res) => {
    const { name, price } = req.body;
    db.query("UPDATE products SET name = ?, price = ? WHERE id = ?", 
        [name, price, req.params.id], 
        (err, data) => {
            if (err) return res.status(500).send(err);
            res.status(200).json({ id: req.params.id, name, price });
        }
    );
};

// Delete a product
export const deleteProduct = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
            if (err) return res.status(500).send(err);
            res.json({ message: "Product deleted successfully." });
        }
    );
};
