"use client"

import { ComponentProps, useEffect } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useAuth } from "@/stores/auth"
import { api } from "@/lib/axios"

export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
    const auth = useAuth()

    useEffect(() => {
        const load = async () => {
            const token = localStorage.getItem("token")
            if (!token) return

            try {
                const response = await api.get("/me", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                const user = response.data

                auth.login(user, token)
            } catch (error) {
                auth.logout()
            }
        }

        load()
    }, [])

    return (
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
    )
}