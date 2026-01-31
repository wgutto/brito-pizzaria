import { getSweetPizzas } from "@/services/product"
import { NextResponse } from "next/server"

export const GET = async () => {
    let sweetPizzas = await getSweetPizzas()

    sweetPizzas = sweetPizzas.map((pizza) => ({
        ...pizza,
        image: `${process.env.NEXT_PUBLIC_BASE_URL}/pizzas/${pizza.image}`,
    }))

    return NextResponse.json({
        pizzas: sweetPizzas
    })
}