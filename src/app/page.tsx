import { PizzaList } from "@/components/home/pizza-list"
import { Header } from "@/components/layout/Header"
import { api } from "@/lib/axios"

const Page = async () => {
  // Aqui esta sendo feita a requisição para buscar as pizzas, para que carregue no servidor e envie o HTML pronto para o cliente
  const pizzaReq = await api.get("/pizzas")
  const pizzas = pizzaReq.data.pizzas ?? []

  return (
    <>
      <Header/>
      <main className="container mx-auto mb-10 mt-5">
        <PizzaList pizzas={pizzas}/>
      </main>
    </>
  )
}

export default Page