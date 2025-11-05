import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../../api/productApi";

interface Product {
    id: number;
    name: string;
    price: number;
}

export default function ProductDetail() {
    const { id } = useParams();
    const [products, setProducts] = useState<Product | null>(null);

    useEffect(() => {
        if (id) {
            getProductById(id)
                .then(setProducts)
                .catch(console.error);
        }
    }, [id]);

    if (!products) return <p>Loading...</p>;

    return (
        <div className="container">
            <h2>Product Detail</h2>
            {products && (
                <div className="product">
                    <h3>{products.name}</h3>
                    <p>Price: ${products.price}</p>
                    <Link to="/product/">Back to Product List</Link>
                </div>
            )}
        </div>
    );
}