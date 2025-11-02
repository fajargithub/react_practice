import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productApi";
import { useNavigate } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    price: number;
}

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllProducts().then(setProducts).catch(console.error);
    }, []);

    return (
        <div className="container">
            <h2>Product List</h2>
            {products.map((product) => (
                <div
                    key={product.id}
                    className="product"
                    onClick={() => navigate(`/product/${product.id}`)}
                >
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price.toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}
