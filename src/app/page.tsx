import { PizzaList } from "@/components/home/pizza-list"
import { PizzasTabs } from "@/components/layout/PizzasTabs/pizza-tabs"
import { getAllPizzasService } from "@/services/getAllPizzasService"

const Page = async () => {
  // Aqui esta sendo feita a requisição para buscar as pizzas, para que carregue no servidor e envie o HTML pronto para o cliente
  const pizzas = await getAllPizzasService()

  return (
    <main className="container mx-auto px-4">
      <PizzasTabs active="/" />
      <PizzaList pizzas={pizzas} />
    </main>
  )
}

export default Page