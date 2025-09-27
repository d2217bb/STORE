// app/(routes)/category/page.tsx
export const revalidate = 0;

import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";
import getCategory from "@/actions/get-category";
import getCategories from "@/actions/get-categories";
import getBillboard from "@/actions/get-billboard";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";

const storeId = "ef8e4d4b-eb06-4a13-b99d-8610732e9a"; // ID-ul magazinului tău

const Page = async () => {

  const categories = await getCategories(storeId);
  const billboards = await getBillboard(storeId);
  const sizes = await getSizes(storeId);
  const colors = await getColors(storeId);

  // Ia prima categorie ca exemplu
  const category = categories[0]; 
  const products = await getProducts(storeId, { categoryId: category?.id });

  const billboardData = billboards.find(b => b.id === category?.billboardId);

  return (
    <div className="bg-white">
      <Container>
        {billboardData && <Billboard data={billboardData} />}

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />

            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
