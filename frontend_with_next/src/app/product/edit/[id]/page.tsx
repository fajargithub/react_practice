import ProductForm from '@/components/product/ProductForm';

interface EditProps {
    params: Promise<{ id: string }>;
}

export default async function EditProductPage({ params }: EditProps) {
    const { id } = await params;
    return <ProductForm id={id} />;
}