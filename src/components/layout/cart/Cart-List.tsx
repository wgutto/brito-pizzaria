import { useCart } from "@/stores/cart"
import { Frown } from "lucide-react"
import { CartProduct } from "./Cart-Item"

export const CartList = () => {
    const cart = useCart()

    return (
        <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll">
            {cart.items.length > 0 &&
                <>
                    {cart.items.map((item) =>
                        <CartProduct key={`${item.productId}-${item.size}-${item.edge}`} data={item}/>
                    )}
                </>
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