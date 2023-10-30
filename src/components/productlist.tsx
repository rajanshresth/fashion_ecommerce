import db from "@/server/db"
import { product,productImage } from "@/server/db/schema/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";


const ProductList = async () => {
    const products = await db
    .select({
        id: product.productId,
        name: product.name,
        description: product.description,
        price: product.price,
        image: productImage.imageUrl,
    })
    .from(product)
    .leftJoin(productImage, eq(productImage.productId, product.productId));
  return (
    <ul className="w-full grid lg:grid-cols-3 lg:grid-rows-3 grid-cols-2 grid-flow-row-2 items-center space-y-2 gap-4 ">
        {products.map((item) =>(
            <li key={item.id} className="flex flex-col space-y-1 ">
                <Image src='/assets/vans_hoddie1.jpg' alt={item.name} width={200} height={200} className="w-full"/>
                <h1 className="font-bold">{item.name}</h1>
                <p className="font-semibold text-md">Price:{`$${item.price}`}</p>
            </li>
        ))}
    </ul>
  )
}

export default ProductList