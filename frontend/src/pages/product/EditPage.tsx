import { useEffect, useState } from "react";
import ProductForm from "../../components/product/ProductForm";
import { getProductById, updateProduct } from "../../api/productApi";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState<{ name: string; price: number }>();

    useEffect(() => {
    if (id) {
      getProductById(id).then((data) =>
        setInitialData({ name: data.name, price: data.price })
      );
    }
  }, [id]);

  const handleUpdate = async (data: { name: string; price: number }) => {
    if (id) {
      await updateProduct(id, data);
      navigate("/product/");
    }
};

    return <ProductForm initialData={initialData} onSubmit={handleUpdate} />;
}