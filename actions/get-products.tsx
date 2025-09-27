import { Product } from "@/types";

interface GetProductsParams {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
}

const getProducts = async ({ categoryId, colorId, sizeId }: GetProductsParams): Promise<Product[]> => {
  const query = new URLSearchParams();
  if (categoryId) query.append("categoryId", categoryId);
  if (colorId) query.append("colorId", colorId);
  if (sizeId) query.append("sizeId", sizeId);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?${query.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export default getProducts;

