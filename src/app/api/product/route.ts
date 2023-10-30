import db from "@/server/db";
import * as schema from '@/server/db/schema/schema'
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    const product = await db.select().from(schema.product);
    return NextResponse.json(product,{status:200})
}