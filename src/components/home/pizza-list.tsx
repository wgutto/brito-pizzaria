"use client"

import { Product } from "@/lib/generated/prisma/client"
import { PizzaItem } from "./pizza-item"
import { useProducts } from "@/stores/products"
import { useEffect } from "react"

type Props = {
    pizzas: Product[]
}
export const PizzaList = ({ pizzas }: Props) => {
    const products = useProducts()

    useEffect(() => {
        products.setProducts(pizzas)
    }, [pizzas])

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pizzas.map((pizza) => 
                    <PizzaItem key={pizza.id} pizza={pizza}/>
                )}
        </div>
    )
}