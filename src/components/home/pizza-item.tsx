import { ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardAction, CardContent, CardDescription, CardTitle } from "../ui/card"
import { Product } from "@/lib/generated/prisma/client"
import { decimalToMoney } from "@/lib/utils"

type Props = {
    pizza: Product
}
export const PizzaItem = ({ pizza }: Props) => {
    return (
        <Card key={pizza.id}>
            <CardContent className="flex flex-col items-center gap-4 p-4">
                <img src={pizza.image} alt={pizza.image} className="w-38 rounded-full"/>

                <div className="w-full flex flex-col gap-2">
                    <CardTitle className="text-center text-lg">{pizza.name}</CardTitle>

                    <CardDescription className="truncate text-nowrap lg:text-wrap">{pizza.ingredients}</CardDescription>
                </div>

                <div className="w-full flex flex-col gap-3 lg:items-center lg:flex-row lg:justify-between lg:gap-0">
                    <CardTitle className="text-sm">{decimalToMoney(pizza.price)}</CardTitle>

                    <CardAction className="w-full lg:w-auto">
                        <Button className="w-full lg:w-25 cursor-pointer">
                            <ShoppingCart className="size-5"/>
                        </Button>
                    </CardAction>
                </div>
            </CardContent>
        </Card>
    )
}