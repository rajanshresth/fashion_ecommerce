import db from "@/server/db";
import { users } from "@/server/db/schema/schema";
import {Button} from "@/components/ui/button";

export default async function Home() {
  const user= await db.select().from(users);
  return (
    <main>
       <Button>Button</Button>
    </main>
  );
}
