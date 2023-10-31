import Image from "next/image";
import Link from "next/link";


type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    created_at: string;
    updated_at: string;
  };
const url = process.env.NEXT_PUBLIC_API_URL;
const ProductList = async () => {
    const getData = await fetch(`${url}/api/product`);
    const products = await getData.json();        
  return (
   <>
    <ul className="w-full grid lg:grid-cols-3 lg:grid-rows-3 grid-cols-2 grid-flow-row-2 items-center space-y-2 gap-4 ">
            {products.map((item:Product) =>(
                <Link href={`/product/${item.id}`} key={item.id}>
                    <li key={item.id} className="flex flex-col space-y-1 ">
                        <Image src='/assets/vans_hoddie1.jpg' alt={item.name} width={200} height={200} className="w-full"/>
                        <h1 className="font-bold">{item.name}</h1>
                        <p className="font-semibold text-md">Price:{`$${item.price}`}</p>
                    </li>
                </Link>
            ))}
        </ul>
   </>
  )
}

export default ProductList