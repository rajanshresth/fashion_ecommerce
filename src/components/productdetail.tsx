import { selectUserSchema } from '@/server/db/schema/schema'
import Image from 'next/image'
import React from 'react'
import z from 'zod'
import {Button} from './ui/button'

type Product = z.infer<typeof selectUserSchema>
const ProductDetail = async({products}:{products:Product[]}) => {
    
  return (
    <>
        <div className='flex gap-4 '>
            <Image src='/assets/vans_old_skool.jpg' width={400} height={350} alt='Vans Old Skool' className='w-[60%]' />
            <ul className='w-[40%]'>
                {products.map((product) => (
                    <li key={product.productId} className='flex flex-col gap-3'>
                        <h1 className='font-bold text-2xl underline'>{product.name}</h1>
                        <p className='text-md'>Rating:*****</p>
                        <p className='font-semibold text-md'>${product.price}</p>
                        <p className='text-md'>Quantity Left:{product.stockQuantity}</p>
                        <p className='text-md'>Color:{product.color}</p>
                        <p className='text-md'>Size:{product.size}</p>
                        <p className='text-md'>Category:{product.category}</p>
                        <p className='text-md'>Brand:{product.brand}</p>
                        <div>
                            <h2 className='font-semibold text-md underline'>Description</h2>
                            <p className='text-md'>{product.description}</p>
                        </div>
                        <Button>Add to Cart</Button>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default ProductDetail