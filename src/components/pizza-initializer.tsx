"use client"

import { useProducts } from "@/stores/product"
import { useEffect } from "react"

export const PizzaInitializer = ({ pizzas }: { pizzas: any[] }) => {
    const products = useProducts(state => state.products)
    const setProducts = useProducts(state => state.setProducts)

    useEffect(() => {
        if (products.length === 0 && pizzas.length > 0) {
            setProducts(pizzas)
        }
    }, [pizzas, products.length, setProducts])

    return null
}