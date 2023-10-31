import { selectUserSchema } from '@/server/db/schema/schema'
import Image from 'next/image'
import React from 'react'
import z from 'zod'
import {Button} from './ui/button'
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"

type Product = z.infer<typeof selectUserSchema>

export default function ProductDetail({products}:{products:Product[]}) {
  return (
    <div className="max-w-6xl px-4 mx-auto py-6 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-4 rounded-full">
        <div className="grid grid-cols-1 gap-6 items-center">
          <Image
            alt="Product"
            className="object-cover w-full h-full"
            height="320"
            src='/assets/vans_old_skool.jpg'
            style={{
              aspectRatio: "320/320",
              objectFit: "cover",
            }}
            width="320"
          />
        </div>
      </div>
      {products.map((product) => (
            <div key={product.productId} className="w-full md:w-1/2 pr-4 pl-4">
                <div className="mb-6">
                    <h1 className="font-bold text-3xl">{product.name}</h1>
                </div>
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="text-lg">Stock: {product.stockQuantity}</div>
                    <div className="text-lg">Review: 4.5/5</div>
                </div>
                <div className="mb-6">
                    <div className="text-4xl font-bold">${product.price}</div>
                </div>
                {/* Size */}
                <div className="mt-4">
                    <Select>
                        <SelectTrigger>
                        <SelectValue placeholder="Select a Size" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Sizes</SelectLabel>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                        </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                {/* Brand */}
                <div className="mt-4">
                    <Select>
                        <SelectTrigger>
                        <SelectValue placeholder="Select a Brand" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Brands</SelectLabel>
                            <SelectItem value="acme">Acme</SelectItem>
                            <SelectItem value="generic">Generic</SelectItem>
                            <SelectItem value="luxury">Luxury</SelectItem>
                        </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                {/* color */}
                <div className="mt-4">
                    <Select>
                        <SelectTrigger>
                        <SelectValue placeholder="Select a Color" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Colors</SelectLabel>
                            <SelectItem value="red">Red</SelectItem>
                            <SelectItem value="blue">Blue</SelectItem>
                            <SelectItem value="green">Green</SelectItem>
                        </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-4 font-semibold text-xl">
                    <p className="text-sm">
                        {product.description}
                    </p>
                </div>
                <div className="mt-4">
                    <Button size="lg">Add to Cart</Button>
                </div>
            </div>
        ))}
    </div>
  )
}

