"use client"

import { PizzaItem } from "./pizza-item"
import { useProducts } from "@/stores/products"
import { useEffect } from "react"
import { useCart } from "@/stores/cart"
import { Product } from "@/types/product"

type Props = {
    pizzas: Product[]
}
export const PizzaList = ({ pizzas }: Props) => {
    const products = useProducts()
    const cart = useCart()

    useEffect(() => {
        products.setProducts(pizzas)
    }, [pizzas, cart.items])

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pizzas.map((pizza) => 
                    <PizzaItem key={pizza.id} pizza={pizza}/>
                )}
        </div>
    )
}