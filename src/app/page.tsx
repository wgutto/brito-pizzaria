import { PizzaList } from "@/components/home/pizza-list"
import { getAllPizzasService } from "@/services/getAllPizzasService"

const Page = async () => {
  // Aqui esta sendo feita a requisição para buscar as pizzas, para que carregue no servidor e envie o HTML pronto para o cliente
  const pizzas = await getAllPizzasService()

  return (
    <main className="container mx-auto px-4 max-w-7xl">
      <PizzaList pizzas={pizzas} />
    </main>
  )
}

export default Page