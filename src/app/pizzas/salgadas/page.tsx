import { PizzaList } from "@/components/home/pizza-list"
import { PizzasTabs } from "@/components/layout/PizzasTabs/PizzaTabs"
import { api } from "@/lib/axios"

const Page = async () => {
    // Aqui esta sendo feita a requisição para buscar as pizzas, para que carregue no servidor e envie o HTML pronto para o cliente
    const pizzaReq = await api.get("/pizzas/salgadas")
    const pizzas = pizzaReq.data.pizzas ?? []

    return (
        <>
            <main className="container mx-auto px-4">
                <PizzasTabs active="/pizzas/salgadas"/>
                <PizzaList pizzas={pizzas} />
            </main>
        </>
    )
}

export default Page