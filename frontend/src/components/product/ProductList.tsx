import { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../../api/productApi";
import { useNavigate } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    price: number;
}

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        const data = await getAllProducts();
        setProducts(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id: number) => {
        if(confirm("Are you sure you want to delete this product?"))
        {
            await deleteProduct(String(id));
            fetchData();
        }
    };

    return (
        <div className="container">
            <h2>Product List</h2>
            <button onClick={() => navigate("/product/add")}>Add Products</button>
            {products.map((product) => (
                <div key={product.id} className="product">
                    <h3 onClick={() => navigate(`/product/${product.id}`)}>{product.name}</h3>
                    <p>Price: ${product.price.toLocaleString()}</p>
                    <button onClick={() => navigate(`/product/edit/${product.id}`)}>Edit</button>
                    <button onClick={(e) => { e.stopPropagation(); handleDelete(product.id); }}>Delete</button>
                    <button onClick={() => navigate(`/product/${product.id}`)}>View Reviews</button>
                </div>
            ))}
        </div>
    );
}
