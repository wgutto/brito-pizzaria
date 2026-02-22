import { api } from "@/lib/axios"

export const getSweetPizzasService = async () => {
    try {
        const response = await api.get("/pizzas/doces")
        const pizzas = response.data.pizzas || []

        return pizzas
    } catch (error) {
        // capturar o error depois
        return []
    }
}