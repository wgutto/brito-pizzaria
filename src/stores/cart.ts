import { CartItem } from "@/types/cart-item"
import { create } from "zustand"

type Store = {
    open: boolean
    setOpen: (open: boolean) => void

    items: CartItem[]
    addItem: (item: CartItem) => void
    updateQuantity: (productId: number, delta: number, size: string, edge: string) => void
}

export const useCart = create<Store>()((set) => ({
    open: false,
    setOpen: (open => set(state => ({ ...state, open }))),
    items: [],
    addItem: (item) => set(state => {
        let clonedItems = [...state.items]
        const existingItem = state.items.find(i => i.productId === item.productId && i.size === item.size && i.edge === item.edge)

        if(existingItem) {
            clonedItems = clonedItems.map(i => 
                i.productId === item.productId && i.size === item.size && i.edge === item.edge ? {...i, quantity: i.quantity + item.quantity} : i
            )
        } else {
            clonedItems.push(item)
        }

        return {...state, items: clonedItems}
    }),
    updateQuantity: (productId, delta, size, edge) => set(state => {
        const clonedItems = state.items.map(i => {
            if(i.productId !== productId || i.size !== size || i.edge !== edge) return i
            const newQuantity = i.quantity + delta

            if(newQuantity <= 0) return null

            return {...i, quantity: newQuantity}
        }).filter((i): i is CartItem => i !== null)

    return {...state, items: clonedItems}
    })
}))