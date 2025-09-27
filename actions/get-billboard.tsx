import { Billboard } from "@/types";

const getBillboard = async (billboardId: string): Promise<Billboard> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/billboards/${billboardId}`);
  if (!res.ok) throw new Error("Failed to fetch billboard");
  return res.json();
};

export default getBillboard;


