import { api } from "@/lib/axios"

export const getAllPizzasService = async () => {
    try {
        const pizzaReq = await api.get("/pizzas")
        const pizzas = pizzaReq.data.pizzas ?? []

        return pizzas
    } catch (error) {
        // capturar error depois
        return []
    }
}