"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/api";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  const deleteProduct = async(id: number) => {
    if(confirm("Are you sure you want to delete this product?")) {
      await api.delete(`/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    }
  };

return (
  <div className="container">
    <h1>Product List</h1>
    <Link href="/product/add"><button>Add Product</button></Link>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
          <Link href={`/product/edit/${product.id}`}><button>Edit</button></Link>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
  );
}