"use client"

import { useCart } from "@/stores/cart"
import { useProducts } from "@/stores/products"

export const CartItem = () => {
    const cart = useCart()
    const products = useProducts()
    return (
        <div>
            {cart.items.length > 0 &&
                cart.items.map((item) => {
                    const product = products.products.find(p => p.id === item.productId)
                    if (!product) return null
                    return (
                        <div key={product.id}>
                            <p>{product.name}</p>
                            <p>Quantidade: {item.quantity}</p>
                        </div>
                    )
                })
            }
            
            {cart.items.length === 0 &&
                <p>Nenhum item no carrinho.</p>
            }
        </div>
    )
}