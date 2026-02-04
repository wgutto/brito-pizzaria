"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/stores/cart"
import { CartItem } from "./Cart-Item"

export const Cart = () => {
    const cart = useCart()
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
                            <ShoppingCart className="size-7"/>
                            <p className="text-3xl">Carrinho</p>
                        </SheetTitle>
                        <SheetDescription className="text-md">Lista de produtos no carrinho.</SheetDescription>
                    </SheetHeader>
                    <CartItem/>
                </SheetContent>
            </Sheet>
        </div>
    )
}