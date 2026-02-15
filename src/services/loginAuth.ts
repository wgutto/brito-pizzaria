import { api } from "@/lib/axios"
import { authResponse } from "@/types/authResponse"

export const loginAuth = async (email: string, password: string) => {
    const response = await api.post("/login", {
        email: email,
        password: password
    })

    const data: authResponse = response.data

    return data
}