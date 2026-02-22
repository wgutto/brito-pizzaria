import { CartItem } from "@/types/cart-item"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type Store = {
    open: boolean
    items: CartItem[]

    setOpen: (open: boolean) => void
    addItem: (item: CartItem) => void
    updateQuantity: (productId: number, delta: number, size: string, edge: string) => void
}

export const useCart = create<Store>()(
    persist(
        (set) => ({
            open: false,
            items: [],

            setOpen: (open => set(state => ({ ...state, open }))),

            addItem: (item) => set(state => {
                let itemsCloned = [...state.items]
                const existingItem = state.items.find(i => i.productId === item.productId && i.size === item.size && i.edge === item.edge)

                let uptadeItems = []

                if (existingItem) {
                    itemsCloned = itemsCloned.map(i =>
                        i.productId === item.productId && i.size === item.size && i.edge === item.edge ? { ...i, quantity: i.quantity + item.quantity } : i
                    )
                } else {
                    itemsCloned.push(item)
                }

                return {...state, items: itemsCloned }
            }),

            updateQuantity: (productId, delta, size, edge) => set(state => {

                const uptadeitems = state.items.map(i => {
                    if (i.productId !== productId || i.size !== size || i.edge !== edge) return i

                    const newQuantity = i.quantity + delta
                    if (newQuantity <= 0) return null

                    return { ...i, quantity: newQuantity }
                }).filter((i): i is CartItem => i !== null)

                return { items: uptadeitems }
            })
        }), {
        name: "cart-storage",
        partialize: (state) => ({
            items: state.items
        }),
    }
    )
)