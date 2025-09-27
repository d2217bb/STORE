import { Category } from "@/types";

const getCategory = async (categoryId: string): Promise<Category> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`);
  if (!res.ok) throw new Error("Failed to fetch category");
  return res.json();
};

export default getCategory;
