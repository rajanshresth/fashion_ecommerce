import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";


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

export default async function ProductList() {
    const getData = await fetch(`${url}/api/product`);
    const products = await getData.json();   
  return (
    <section className="container mx-auto px-4 md:px-6 py-6 grid md:grid-cols-[1fr_3fr] gap-6 items-start">
      <aside className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Filters</h2>
        <Accordion className="w-full" collapsible type="single">
          <AccordionItem value="category">
            <AccordionTrigger className="text-base">Category</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="category-1" />
                  Category 1{"\n                          "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="category-2" />
                  Category 2{"\n                          "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="category-3" />
                  Category 3{"\n                          "}
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger className="text-base">Price</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="price-1" />
                  $0 - $50{"\n                          "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="price-2" />
                  $51 - $100{"\n                          "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="price-3" />
                  $101 - $150{"\n                          "}
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
      <main className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((item:Product) =>(
            <div className="relative " key={item.id} >
                <Link href={`/product/${item.id}`} key={item.id} className="relative inset-0 z-10">
                        <Image
                            alt="vans"
                            className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                            height="200"
                            width="200"
                            src="/assets/vans_old_skool.jpg"
                        />
                        <div className="flex-1 py-4">
                            <h3 className="font-semibold tracking-tight">{item.name}</h3>
                            <h4 className="font-semibold">${item.price}</h4>
                        </div>
                </Link>
            </div>
        ))}
      </main>
    </section>
  )
}
