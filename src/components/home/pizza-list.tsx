"use client"

import { Product } from "@/lib/generated/prisma/client"
import { PizzaItem } from "./pizza-item"

type Props = {
    pizzas: Product[]
}
export const PizzaList = ({ pizzas }: Props) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pizzas.map((pizza) => 
                    <PizzaItem key={pizza.id} pizza={pizza}/>
                )}
        </div>
    )
}