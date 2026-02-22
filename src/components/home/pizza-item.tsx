"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { decimalToMoney } from "@/lib/utils"
import { useState } from "react"
import { DetailsModal } from "./details-modal"
import Image from "next/image"
import { ProductType } from "@/types/product"

type Props = {
    pizza: ProductType
}
export const PizzaItem = ({ pizza }: Props) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <Card key={pizza.id}>
                <CardContent className="min-h-full flex flex-col justify-between gap-6 px-4">
                    <CardHeader className="flex flex-col items-center gap-4 px-0">
                        <Image
                            src={pizza.image}
                            alt={pizza.name}
                            width={100}
                            height={100}
                            unoptimized
                            className="w-full h-auto object-contain rounded-md hover:scale-102 transition-all duration-500"
                        />

                        <div className="w-full flex flex-col gap-1">
                            <CardTitle className="text-center font-semibold text-xl tracking-tight">{pizza.name}</CardTitle>

                            <CardDescription className="text-center leading-relaxed">{pizza.ingredients}</CardDescription>
                        </div>
                    </CardHeader>

                    <CardFooter className="flex flex-col gap-4 items-start lg:items-center lg:flex-row lg:justify-between lg:gap-0 px-0">
                        <CardTitle className="text-left">
                            <span className="block text-xs text-muted-foreground">a partir de</span>
                            <span className="text-xl font-bold">{decimalToMoney(pizza.price)}</span>
                        </CardTitle>

                        <Button
                            className="w-full lg:w-auto text-sm font-semibold cursor-pointer py-6 active:scale-102 transition-all duration-200"
                            onClick={() => setOpenModal(true)}
                        >
                            <ShoppingCart className="size-6" />
                            Adicionar
                        </Button>
                    </CardFooter>
                </CardContent>
            </Card>

            {openModal &&
                <DetailsModal pizza={pizza} openModal={openModal} closeModal={() => setOpenModal(false)} />
            }
        </>
    )
}