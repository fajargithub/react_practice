import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../../api/userApi";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
}

export default function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if(id){
            getUserById(id)
                .then(setUser)
                .catch(console.error);
        }
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="container">
            <h2>User Detail</h2>
            {user && (
                <div className="user">
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Address: {user.address}</p>
                    <Link to="/user/">Back to User List</Link>
                </div>
            )}
        </div>
    );
}
