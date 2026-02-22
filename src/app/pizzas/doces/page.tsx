import { PizzaList } from "@/components/home/pizza-list"
import { PizzasTabs } from "@/components/layout/PizzasTabs/pizza-tabs"
import { api } from "@/lib/axios"

const Page = async () => {
    // Aqui esta sendo feita a requisição para buscar as pizzas, para que carregue no servidor e envie o HTML pronto para o cliente
    const pizzaReq = await api.get("/pizzas/doces")
    const pizzas = pizzaReq.data.pizzas ?? []

    return (
        <main className="container mx-auto p-4">
            <PizzasTabs active="/pizzas/doces" />
            <PizzaList pizzas={pizzas} />
        </main>
    )
}

export default Page