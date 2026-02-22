import { useCart } from "@/stores/cart"
import { Frown } from "lucide-react"
import { CartProduct } from "./cart-item"

export const CartList = () => {
    const items = useCart(state => state.items)

    if (items.length === 0) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground gap-2">
                <Frown className="size-20" />
                <p className="text-md">Nenhum item no carrinho.</p>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-col gap-4 min-[500]:overflow-y-auto">
            {items.map((item) => (
                <CartProduct
                    key={`${item.productId}-${item.size}-${item.edge}`}
                    data={item}
                />
            ))}
        </div>
    )
}