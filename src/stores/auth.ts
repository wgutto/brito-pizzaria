import { User } from "@/types/user";
import { create } from "zustand";

type Store = {
    token: string | null
    user: User | null
    authenticated: boolean
    open: boolean
    setToken: (token: string | null) => void
    setUser: (user: User | null) => void
    setOpen: (newOpen: boolean) => void
    logout: () => void
}

export const useAuth = create<Store>()(set => ({
    token: null,
    user: null,
    authenticated: false,
    open: false,

    setToken: (token: string | null) => set({ token: token, authenticated: !!token }),

    setUser: (user: User | null) => set({user: user, authenticated: !!user}),

    setOpen: (newOpen: boolean) => set({open: newOpen}),

    logout: () => set({
        token: null,
        user: null,
        authenticated: false
    })
}))