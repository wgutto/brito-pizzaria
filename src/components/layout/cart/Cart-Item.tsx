import { Button } from "@/components/ui/button"
import { decimalToMoney, EDGE_PRICES } from "@/lib/utils"
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
        <div className="flex flex-col mx-2 bg-card rounded-md p-4 gap-4">
            <div className="flex gap-4">
                <div className="flex items-center">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={70}
                        height={70}
                        className="rounded-full"
                        unoptimized
                    />
                </div>

                <div>
                    <h2 className="font-bold">{product.name} ({data.size.charAt(0).toLocaleUpperCase() ?? ""})</h2>
                    <p className="text-muted-foreground">{data.edge}{EDGE_PRICES[data.edge] <= 0 ? "" : ` + ${decimalToMoney(EDGE_PRICES[data.edge])}`}</p>
                    <p className="text-muted-foreground">{decimalToMoney(data.finalPrice)} unidade</p>
                </div>
            </div>

            <div className="flex flex-col justify-between items-center gap-2 border-t pt-4 min-[400px]:flex-row min-[400px]:gap-0">
                <div className="flex items-center gap-2">
                        <Button className="w-7 h-7 cursor-pointer" onClick={() => cart.updateQuantity(data.productId, -1, data.size, data.edge)} variant="outline" size="icon">
                            <MinusIcon className="size-4" />
                        </Button>
                        <p className="font-bold">{data.quantity}</p>
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