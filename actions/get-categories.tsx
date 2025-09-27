import { Category } from "@/types";

const getCategories = async (storeId: string): Promise<Category[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${storeId}`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch categories for store ${storeId}`);
  }

  return res.json();
};

export default getCategories;
