import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductList from "./components/product/ProductList";
import ProductDetailPage from "./pages/product/DetailPage";
import ProductAddPage from "./pages/product/AddPage";
import ProductEditPage from "./pages/product/EditPage";
import UserList from "./components/user/UserList";
import UserDetailPage from "./pages/user/DetailPage";
import UserAddPage from "./pages/user/AddPage";
import UserEditPage from "./pages/user/EditPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/product/add" element={<ProductAddPage />} />
        <Route path="/product/edit/:id" element={<ProductEditPage />} />
        
        <Route path="/user/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetailPage />} />
        <Route path="/user/add" element={<UserAddPage />} />
        <Route path="/user/edit/:id" element={<UserEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}