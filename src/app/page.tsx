import { PizzaList } from "@/components/home/pizza-list"
import { PizzasTabs } from "@/components/layout/PizzasTabs/PizzaTabs"
import { api } from "@/lib/axios"

const Page = async () => {
  // Aqui esta sendo feita a requisição para buscar as pizzas, para que carregue no servidor e envie o HTML pronto para o cliente
  const pizzaReq = await api.get("/pizzas")
  const pizzas = pizzaReq.data.pizzas ?? []

  return (
    <>
      <main className="container mx-auto mb-10 px-4">
        <PizzasTabs active="/"/>
        <h1 className="text-center text-4xl font-bold my-10">Nossas Pizzas</h1>
        <PizzaList pizzas={pizzas} />
      </main>
    </>
  )
}

export default Page