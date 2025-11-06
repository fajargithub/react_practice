"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import "@/styles/form.scss";

interface ProductFormProps {
  id?: string;
}

export default function ProductForm({ id }: ProductFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

    useEffect(() => {
    if (id) {
      api.get(`/products/${id}`).then((res) => {
        const product = res.data;
        setName(product.name);
        setPrice(product.price);
      });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, price: Number(price) };

    try {
      if (id) {
        await api.put(`/products/${id}`, data);
        alert("Product updated successfully!");
      } else {
        console.log("Submitting data:", data);
      await api.post("/products", data);
      alert("Product added successfully!");
    }
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    //window.location.href = "/";
  };

    return (
    <div className="form-container">
      <h1>{id ? "Edit Product" : "Add Product"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">{id ? "Update" : "Create"}</button>
      </form>
    </div>  
    );
}