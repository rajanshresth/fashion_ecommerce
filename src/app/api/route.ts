import db from "@/server/db";
import { users } from "@/server/db/schema/schema";
import { NextResponse } from "next/server";

export async function GET() {
    const user= await db.select().from(users);
    return NextResponse.json(user);
}