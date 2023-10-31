import ProductDetail from '@/components/productdetail'
import db from '@/server/db'
import { product } from '@/server/db/schema/schema'
import React from 'react'
import { eq, or, sql } from "drizzle-orm";

const ProductDetailPage = async({params}:{params:{id:string}}) => {
  const products = await db.select().from(product).where(
    or(
      eq(product.productId, sql`${params.id}`)
    )
  );
  if(!products) return null
  return (
    <div>
      <ProductDetail products={products} />
    </div>
  )
}

export default ProductDetailPage