import ProductForm from "../../components/product/ProductForm";
import { createProduct } from "../../api/productApi";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
    const navigate = useNavigate();

    const handleCreate = async (data: { name: string; price: number }) => {
        await createProduct(data);
        navigate("/product/");
    };

    return <ProductForm onSubmit={handleCreate} />;
}