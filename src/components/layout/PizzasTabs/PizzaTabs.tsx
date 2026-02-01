import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export function PizzasTabs({ active }: { active: string }) {
    return (
        <Tabs value={active}>
            <TabsList variant="line" className="w-full">
                <TabsTrigger value="/" asChild>
                    <Link href="/">Nossas Pizzas</Link>
                </TabsTrigger>
                <TabsTrigger value="/pizzas/salgadas" asChild>
                    <Link href="/pizzas/salgadas">Pizzas Salgadas</Link>
                </TabsTrigger>
                <TabsTrigger value="/pizzas/doces" asChild>
                    <Link href="/pizzas/doces">Pizzas Doces</Link>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}