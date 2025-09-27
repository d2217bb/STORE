import { Product } from "@/types";

const getProduct = async (productId: string): Promise<Product> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

export default getProduct;
