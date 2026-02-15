import { User } from "@/types/user";
import { create } from "zustand";

type Store = {
    token: string | null
    user: User | null
    authenticated: boolean
    open: boolean

    login: (user: User, token: string) => void
    setOpen: (newOpen: boolean) => void
    logout: () => void
}

export const useAuth = create<Store>((set) => ({
    token: null,
    user: null,
    authenticated: false,
    open: false,

    login: (user, token) => {
        localStorage.setItem("token", token)
        set({ user, token, authenticated: true })
    },

    setOpen: (newOpen: boolean) => set({ open: newOpen }),

    logout: () => {
        localStorage.removeItem("token")
        set({ token: null, user: null, authenticated: false })
    }
}))