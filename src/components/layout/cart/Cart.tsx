"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/stores/cart"
import { CartList } from "./Cart-List"
import { useProducts } from "@/stores/products"
import { useEffect, useState } from "react"
import { decimalToMoney } from "@/lib/utils"

export const Cart = () => {
    const cart = useCart()
    const products = useProducts()
    const [subtotal, setSubtoal ] = useState(0)
    const [shippingCost, setShippingCost] = useState(10)

    const calculateSubtotal = () => {
        let subtotal = 0
        cart.items.map((item) => {
            const product = products.products.find(i => i.id === item.productId)

            if(product) subtotal += Number(product.price)
        })

        setSubtoal(subtotal)
    }

    useEffect(calculateSubtotal, [cart])
    return (
        <div>
            <Sheet open={cart.open} onOpenChange={(open) => cart.setOpen(open)}>
                <SheetTrigger asChild>
                    <Button className="cursor-pointer w-15">
                        <ShoppingCart className="size-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="flex items-center gap-2">
                            <ShoppingCart className="size-7" />
                            <p className="text-3xl">Carrinho</p>
                        </SheetTitle>
                        <SheetDescription className="text-md">Lista de produtos no carrinho.</SheetDescription>
                    </SheetHeader>

                    <CartList />

                    <SheetFooter className="flex gap-4">
                            <div>
                                <p className="font-semibold text-muted-foreground">Subtotal R$ {decimalToMoney(subtotal)}</p>
                                <p className="font-semibold text-muted-foreground">Frete R$ {decimalToMoney(shippingCost)}</p>
                                <p className="font-semibold text-muted-foreground">Total R$ {decimalToMoney(subtotal + shippingCost)}</p>
                            </div>

                            <Button className="bg-green-600 cursor-pointer hover:bg-green-700">Finalizar pedido</Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}