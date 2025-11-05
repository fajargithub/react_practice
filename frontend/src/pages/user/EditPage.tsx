import { useEffect, useState } from "react";
import UserForm from "../../components/user/UserForm";
import { getUserById, updateUser } from "../../api/userApi";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState<{ name: string; email: string; phone: string; address: string; password: string }>();

    useEffect(() => {
    if (id) {
      getUserById(id).then((data) =>
        setInitialData({ name: data.name, email: data.email, phone: data.phone, address: data.address, password: data.password })
      );
    }
  }, [id]);

  const handleUpdate = async (data: { name: string; email: string; phone: string; address: string; password: string }) => {
    if (id) {
      await updateUser(id, data);
      navigate("/user/");
    }
};

    return <UserForm initialData={initialData} onSubmit={handleUpdate} />;
}