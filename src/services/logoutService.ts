import { api } from "@/lib/axios"

export const logoutService = async () => {
    const result = await api.post("/logout", {}, {
        withCredentials: true
    })

    return result.data
}