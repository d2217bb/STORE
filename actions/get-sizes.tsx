import { Size } from "@/types";

const safeFetch = async <T>(url: string): Promise<T | []> => {
  try {
    const res = await fetch(url);
    const contentType = res.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      return await res.json();
    } else {
      console.warn("Received non-JSON response from", url);
      return [] as any;
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return [] as any;
  }
};

const getSizes = async (storeId: string): Promise<Size[]> => {
  return safeFetch<Size[]>(`${process.env.NEXT_PUBLIC_API_URL}/${storeId}/sizes`);
};

export default getSizes;

