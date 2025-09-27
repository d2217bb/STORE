import { Color } from "@/types";

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/colors`);
  if (!res.ok) throw new Error("Failed to fetch colors");
  return res.json();
};

export default getColors;
