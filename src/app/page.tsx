import { PizzaList } from "@/components/home/pizza-list"
import { Header } from "@/components/layout/Header"
import { ToggleModeButton } from "@/components/layout/ToggleThemeMode"
import { api } from "@/lib/axios"

const Page = async () => {
  // Aqui esta sendo feita a requisição para buscar as pizzas, para que carregue no servidor e envie o HTML pronto para o cliente
  const pizzaReq = await api.get("/pizzas")
  const pizzas = pizzaReq.data.pizzas ?? []

  return (
    <>
      <div className="fixed bottom-5 right-5"><ToggleModeButton/></div>
      <Header/>
      <main className="container mx-auto mb-10 px-4">
        <h1 className="text-center text-4xl font-bold my-10">Nossas Pizzas</h1>
        <PizzaList pizzas={pizzas}/>
      </main>
    </>
  )
}

export default Page