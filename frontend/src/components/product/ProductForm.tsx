import { useState, useEffect } from "react";

interface ProductFormProps {
    initialData?: { name: string; price: number };
    onSubmit: (data: { name: string; price: number }) => void;
}

export default function ProductForm({ initialData, onSubmit }: ProductFormProps) {
    const [formData, setFormData] = useState({ name: "", price: 0 });

    useEffect(() => {
        if (initialData) setFormData(initialData);
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: name === "price" ? Number(value) : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="container">
            <h2>{initialData ? "Edit Product" : "Add Product"}</h2>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">{initialData ? "Update" : "Create"}</button>
        </form>
    );
}
 
