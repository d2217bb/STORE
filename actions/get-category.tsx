import { Category } from "@/types";

const safeFetch = async <T>(url: string): Promise<T | null> => {
  try {
    const res = await fetch(url);
    const contentType = res.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      return await res.json();
    } else {
      console.warn("Received non-JSON response from", url);
      return null;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

const getCategory = async (storeId: string, categoryId: string): Promise<Category | null> => {
  return safeFetch<Category>(`${process.env.NEXT_PUBLIC_API_URL}/${storeId}/categories/${categoryId}`);
};

export default getCategory;


