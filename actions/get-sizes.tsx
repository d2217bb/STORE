import { Size } from "@/types";

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sizes`);
  if (!res.ok) throw new Error("Failed to fetch sizes");
  return res.json();
};

export default getSizes;

