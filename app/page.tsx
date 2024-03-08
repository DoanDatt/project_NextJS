import HomeBanner from "./Components/HomeBanner";
import Container from "./Components/Container";
import { products } from "@/utils/Products";
import ProductsCard from "./Components/Products/ProductsCard";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((products: any) => {
            return <ProductsCard data={products} key={products.id} />;
          })}
        </div>
      </Container>
    </div>
  );
}
