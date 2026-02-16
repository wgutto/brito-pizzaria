"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/stores/cart"
import { CartList } from "./Cart-List"
import { useEffect, useState } from "react"
import { decimalToMoney } from "@/lib/utils"

export const Cart = () => {
    const cart = useCart()
    const [subtotal, setSubtoal] = useState(0)
    const [shippingCost, setShippingCost] = useState(10)

    const calculateSubtotal = () => {
        let subtotal = 0
        cart.items.map((item) => {

            subtotal += Number(item.finalPrice * item.quantity)
        })

        setSubtoal(subtotal)
    }

    useEffect(calculateSubtotal, [cart])
    return (
        <div>
            <Sheet open={cart.open} onOpenChange={(open) => cart.setOpen(open)}>
                <SheetTrigger asChild>
                    <Button className="cursor-pointer w-15">
                        <ShoppingCart className="size-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className="pb-2">
                        <SheetTitle className="flex items-center gap-2">
                            <ShoppingCart/>
                            <p className="text-2xl">Carrinho</p>
                        </SheetTitle>
                        <SheetDescription className="text-md">Lista de produtos no carrinho.</SheetDescription>
                    </SheetHeader>

                    <CartList />

                    {cart.items.length > 0 &&
                        <SheetFooter className="flex gap-4 pt-2">
                            <div className="border-y py-2 px-1">
                                <div className="flex justify-between">
                                    <p>Subtotal dos itens</p>
                                    <p>{decimalToMoney(subtotal)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Entrega</p>
                                    <p>{decimalToMoney(shippingCost)}</p>
                                </div>
                            </div>

                            <div className="flex justify-between px-1">
                                <p className="font-semibold">Total do pedido</p>
                                <p className="font-bold">{decimalToMoney(subtotal + shippingCost)}</p>
                            </div>

                            <Button className="bg-green-600 cursor-pointer hover:bg-green-700">Finalizar pedido</Button>
                        </SheetFooter>
                    }
                </SheetContent>
            </Sheet>
        </div>
    )
}