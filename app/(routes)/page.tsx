import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage =  async () => {
  const products = await getProducts({isFeatured: true});
  const billboard  = await getBillboard("d1f0b29a-f0d8-4f96-a580-35f961206105");
  return (
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard}/>

          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products}/>
          </div>
        </div>

      </Container>
  );
}
export default HomePage;