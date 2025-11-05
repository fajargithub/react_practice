import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="product">
      <h1>Welcome to React App</h1>
      {/* <ProductList /> */}
      <h3 onClick={() => navigate(`/product/`)}>Product List</h3>
      <h3 onClick={() => navigate(`/user/`)}>User List</h3>
    </div>
  );
}