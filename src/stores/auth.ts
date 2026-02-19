import { User } from "@/types/user";
import { create } from "zustand";

type Store = {
    user: User | null
    authenticated: boolean
    open: boolean

    login: (user: User) => void
    setOpen: (newOpen: boolean) => void
    logout: () => void
}

export const useAuth = create<Store>((set) => ({
    user: null,
    authenticated: false,
    open: false,

    login: (user) => {
        set({ user, authenticated: true })
    },

    setOpen: (newOpen: boolean) => set({ open: newOpen }),

    logout: () => {
        set({ user: null, authenticated: false })
    }
}))