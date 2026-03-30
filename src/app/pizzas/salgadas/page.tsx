import { PizzaList } from "@/components/home/pizza-list"
import { getSavoryPizzasService } from "@/services/getSavoryPizzasService"

const Page = async () => {
    // Aqui esta sendo feita a requisição para buscar as pizzas, para que carregue no servidor e envie o HTML pronto para o cliente
    const pizzas = await getSavoryPizzasService()

    return (
        <main className="container mx-auto px-4 max-w-7xl">
            <PizzaList pizzas={pizzas} />
        </main>
    )
}

export default Page