import { api } from "@/lib/axios"

export const getSavoryPizzasService = async () => {
    try {
        const response = await api.get("/pizzas/salgadas")
        const pizzas = response.data.pizzas || []

        return pizzas
    } catch (error) {
        // capturar o error depois
        return []
    }
}