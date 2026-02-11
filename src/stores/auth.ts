import { User } from "@/types/user";
import { create } from "zustand";

type Store = {
    authenticated: boolean
    user: User | null
    setUser: (user: User | null) => void
}

export const useAuth = create<Store>()(set => ({
    authenticated: false,
    user: null,
    setUser: (user) => set(state => ({user, authenticated: user ? true : false}))
}))