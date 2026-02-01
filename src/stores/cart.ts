import { CartItem } from "@/types/cart-item"
import { create } from "zustand"

type Store = {
    open: boolean
    setOpen: (open: boolean) => void

    items: CartItem[]
    addItem: (item: CartItem, size: string, edge: string, finalPrice: number) => void
    removeItem: (productId: number) => void
}

export const useCart = create<Store>()((set) => ({
    open: false,
    setOpen: (open => set(state => ({ ...state, open }))),
    items: [],
    addItem: (item) => set(state => {
        let clonedItems = [...state.items]
        const existingItem = state.items.find(i => i.productId === item.productId)

        if(existingItem) {
            clonedItems = clonedItems.map(i => 
                i.productId === item.productId ? {...i, quantity: i.quantity + item.quantity} : i
            )
        } else {
            clonedItems.push(item)
        }



        return {...state, items: clonedItems}
    }),
    removeItem: (productId) => set(state => ({
        ...state,
        items: state.items.filter(item => item.productId !== productId)
    }))
}))