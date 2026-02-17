import { api } from "@/lib/axios"
import { User } from "@/types/user"

export const registerService = async (name: string, email: string, password: string, confirmPassword: string) => {
    const response = await api.post("/register", {
        name,
        email,
        password,
        confirmPassword
    })

    const data: User = response.data

    return data
}