import db from "@/server/db";
import { product,productImage } from "@/server/db/schema/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    try {
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
        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json(error);
    }
}