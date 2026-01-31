import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { Product } from "@/lib/generated/prisma/client"

type Props = {
    pizza: Product
}
export const PizzaItem = ({ pizza }: Props) => {
    return (
        <Card key={pizza.id}>
            <CardContent>
                <Image
                    src={pizza.image}
                    alt={pizza.name}
                    width={200}
                    height={200}
                />
            </CardContent>
        </Card>
    )
}