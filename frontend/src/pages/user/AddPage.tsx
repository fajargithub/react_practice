import UserForm from "../../components/user/UserForm";
import { createUser } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
    const navigate = useNavigate();

    const handleCreate = async (data: { name: string; email: string; phone: string; address: string; password: string }) => {
        await createUser(data);
        navigate("/user/");
    };

    return <UserForm onSubmit={handleCreate} />;
}