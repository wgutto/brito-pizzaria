import { ProductType } from "@/types/product"
import { create } from "zustand"

type Store = {
    products: ProductType[]
    setProducts: (products: ProductType[]) => void
}

export const useProducts = create<Store>((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
}))