import { Button } from "@/components/ui/button"
import { decimalToMoney } from "@/lib/utils"
import { useProducts } from "@/stores/products"
import { CartItem } from "@/types/cart-item"
import { MinusIcon, PlusIcon } from "lucide-react"
import { useCart } from "@/stores/cart"
import Image from "next/image"

type Props = {
    data: CartItem
}

export const CartProduct = ({ data }: Props) => {
    const cart = useCart()
    const products = useProducts()

    let product = products.products.find(i => i.id === data.productId)
    if(!product) return null
    return (
        <div className="flex flex-col mx-2 bg-card rounded-md overflow-hidden p-4 gap-4">
            <div className="flex gap-4">
                <div className="flex items-center">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                        unoptimized
                    />
                </div>

                <div className="w-full">
                    <h2 className="font-bold text-md">{product.name} ({data.size.charAt(0).toLocaleUpperCase() ?? ""})</h2>
                    <p className="text-muted-foreground">{data.edge}</p>
                    <p className="text-muted-foreground">{decimalToMoney(product.price)} unidade</p>
                </div>
            </div>

            <div className="flex justify-between border-t pt-4">
                <div className="flex items-center gap-2">
                        <Button className="w-7 h-7 cursor-pointer" onClick={() => cart.updateQuantity(data.productId, -1, data.size, data.edge)} variant="outline" size="icon">
                            <MinusIcon className="size-4" />
                        </Button>
                        {data.quantity}
                        <Button className="w-7 h-7 cursor-pointer" onClick={() => cart.updateQuantity(data.productId, 1, data.size, data.edge)} variant="outline" size="icon">
                            <PlusIcon className="size-4" />
                        </Button>
                </div>
                <div>
                    <p className="font-semibold">Subtotal {decimalToMoney(data.finalPrice * data.quantity)}</p>
                </div>
            </div>
        </div>
    )
}