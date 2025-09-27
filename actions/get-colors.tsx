import {Color} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
    const res = await fetch(URL, {
        next: { 
            revalidate: 0 // Revalidează la 0 minute
            
        }});
    return res.json();
}
export default getColors;