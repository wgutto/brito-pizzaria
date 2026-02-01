"üse client"

import { useCart } from "@/stores/cart"
import { useProducts } from "@/stores/products"

export const CartItem = () => {
    const cart = useCart()
    const products = useProducts()
    return (
        <div>
            {cart.items.length > 1 &&
                cart.items.map((item) => 
                    <div key={item.productId}>
                    </div>
                )
            }
            
            {cart.items.length < 1 &&
                <p>Nenhum item no carrinho.</p>
            }
        </div>
    )
}