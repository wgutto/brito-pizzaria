"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Product } from "@/lib/generated/prisma/client"
import { decimalToMoney } from "@/lib/utils"
import { useState } from "react"
import { DetailsModal } from "./DetailsModal"

type Props = {
    pizza: Product
}
export const PizzaItem = ({ pizza }: Props) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Card key={pizza.id} className="px-0">
                <CardContent className="min-h-full flex flex-col justify-between gap-6 px-4">
                    <CardHeader className="flex flex-col items-center gap-4 px-0">
                        <img src={pizza.image} alt={pizza.image} className="w-full rounded-md" />

                        <div className="w-full flex flex-col gap-2">
                            <CardTitle className="text-center text-lg">{pizza.name}</CardTitle>

                            <CardDescription className="truncate text-nowrap lg:text-wrap">{pizza.ingredients}</CardDescription>
                        </div>
                    </CardHeader>

                    <CardFooter className="flex flex-col gap-3 items-start lg:items-center lg:flex-row lg:justify-between lg:gap-0 px-0">
                        <CardTitle className="text-left text-sm">{decimalToMoney(pizza.price)}</CardTitle>

                        <CardAction className="w-full lg:w-auto">
                            <Button
                                className="w-full lg:w-25 cursor-pointer"
                                onClick={() => setOpenModal(true)}
                            >
                                <ShoppingCart className="size-5" />
                            </Button>
                        </CardAction>
                    </CardFooter>
                </CardContent>
            </Card>
            
            {openModal &&
                <DetailsModal pizza={pizza} openModal={openModal} closeModal={() => setOpenModal(false)}/>
            }
        </>
    )
}