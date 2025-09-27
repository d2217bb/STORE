import { Product } from "@/types";

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

const getProduct = async (storeId: string, productId: string): Promise<Product | null> => {
  return safeFetch<Product>(`${process.env.NEXT_PUBLIC_API_URL}/${storeId}/products/${productId}`);
};

export default getProduct;

