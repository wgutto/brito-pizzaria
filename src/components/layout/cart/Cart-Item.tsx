"use client"

import { Button } from "@/components/ui/button"
import { decimalToMoney } from "@/lib/utils"
import { useCart } from "@/stores/cart"
import { useProducts } from "@/stores/products"
import { Frown, MinusIcon, PlusIcon } from "lucide-react"

export const CartItem = () => {
    const cart = useCart()
    const products = useProducts()
    return (
        <div className="w-full h-full flex flex-col gap-4">
            {cart.items.length > 0 &&
                cart.items.map((item) => {
                    const product = products.products.find(p => p.id === item.productId)
                    if (!product) return null
                    return (
                        <div key={`${item.productId}-${item.size}-${item.edge}`} className="flex items-center gap-4 mx-4">
                            <img src={product.image} alt={product.name} className="w-15 h-15 lg:w-18 lg:h-18 object-cover rounded-full" />

                            <div className="w-full flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
                                <div>
                                    <h2 className="font-bold text-md">{product.name} - {item.size.charAt(0).toLocaleUpperCase() ?? ""}</h2>
                                    <p>{item.edge}</p>
                                    <p>{decimalToMoney(item.finalPrice * item.quantity)}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Button className="cursor-pointer" onClick={() => cart.updateQuantity(item.productId, -1, item.size, item.edge)} variant="outline" size="icon">
                                        <MinusIcon className="size-4" />
                                    </Button>
                                    {item.quantity}
                                    <Button className="cursor-pointer" onClick={() => cart.updateQuantity(item.productId, 1, item.size, item.edge)} variant="outline" size="icon">
                                        <PlusIcon className="size-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            {cart.items.length > 0 &&
                <div className="w-full h-full flex flex-col justify-end gap-4 p-4">
                    <div>
                        <p className="font-semibold">Subtotal R$</p>
                        <p className="font-semibold">Frete R$</p>
                        <p className="font-semibold">Total R$</p>
                    </div>

                    <Button className="bg-green-600 cursor-pointer hover:bg-green-700">Finalizar pedido</Button>
                </div>
            }

            {cart.items.length === 0 &&
                <div className="w-full h-full flex flex-col items-center justify-center gap-8">
                    <p>Nenhum item no carrinho.</p>

                    <Frown className="size-30" />
                </div>
            }
        </div>
    )
}