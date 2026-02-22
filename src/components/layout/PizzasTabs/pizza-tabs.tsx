import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export function PizzasTabs({ active }: { active: string }) {
    return (
        <Tabs value={active} className="mb-10">
            <TabsList variant="line" className="w-full max-w-4xl mx-auto">
                <TabsTrigger value="/" asChild className="text-md">
                    <Link href="/">Todas</Link>
                </TabsTrigger>
                <TabsTrigger value="/pizzas/salgadas" asChild className="text-md">
                    <Link href="/pizzas/salgadas">Salgadas</Link>
                </TabsTrigger>
                <TabsTrigger value="/pizzas/doces" asChild className="text-md">
                    <Link href="/pizzas/doces">Doces</Link>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}