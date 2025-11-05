import { useState, useEffect } from "react";

interface UserFormProps {
    initialData?: { name: string; email: string; phone: string; address: string; password: string };
    onSubmit: (data: { name: string; email: string; phone: string; address: string; password: string }) => void;
}

export default function UserForm({ initialData, onSubmit }: UserFormProps) {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "", password: "" });

    useEffect(() => {
        if (initialData) setFormData(initialData);
    }, [initialData]);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: name === "price" ? Number(value) : value }));
    // };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="container">
            <h2>{initialData ? "Edit User" : "Add User"}</h2>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    required
                />
            </div>
            <div>
                <label>Phone:</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    required
                />
            </div>
            <div>
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    required
                />
            </div>
            <button type="submit">{initialData ? "Update" : "Create"}</button>
        </form>
    );
}
 
