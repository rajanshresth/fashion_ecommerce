
import {Button} from "@/components/ui/button";
import ProductList from "@/components/productlist";
import ProductDetail from "@/components/productdetail";

export default async function Home() {
  
  return (
    <main className="w-full mx-2 ">
       <ProductList />
       {/* <ProductDetail /> */}
    </main>
  );
}
