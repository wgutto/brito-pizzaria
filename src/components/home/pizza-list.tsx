"use client"

import { PizzaItem } from "./pizza-item"
import { ProductType } from "@/types/product"

type Props = {
    pizzas: ProductType[]
}
export const PizzaList = ({ pizzas }: Props) => {

    return (
        <div className="grid grid-cols-1 min-[440]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
                {pizzas.map((pizza) => 
                    <PizzaItem key={pizza.id} pizza={pizza}/>
                )}
        </div>
    )
}