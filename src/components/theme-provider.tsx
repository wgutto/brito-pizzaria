"use client"

import { ComponentProps, useEffect } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useAuth } from "@/stores/auth"
import { api } from "@/lib/axios"

export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
    const auth = useAuth()

    useEffect(() => {
        const load = async () => {
            try {
                const response = await api.get("/me", {
                    withCredentials: true
                })

                const user = response.data.user

                auth.login(user)
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