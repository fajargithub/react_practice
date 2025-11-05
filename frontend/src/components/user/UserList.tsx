import { useEffect, useState } from "react";
import { getAllUsers, deleteUser } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
}

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        const data = await getAllUsers();
        setUsers(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id: number) => {
        if(confirm("Are you sure you want to delete this user?"))
        {
            await deleteUser(String(id));
            fetchData();
        }
    };

    return (
        <div className="container">
            <h2>User List</h2>
            <button onClick={() => navigate("/user/add")}>Add User</button>
            {users.map((user) => (
                <div key={user.id} className="user">
                    <h3 onClick={() => navigate(`/user/${user.id}`)}>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Address: {user.address}</p>
                    <button onClick={() => navigate(`/user/edit/${user.id}`)}>Edit</button>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                    <button onClick={() => navigate(`/user/${user.id}`)}>View Details</button>
                </div>
            ))}
        </div>
    );
}