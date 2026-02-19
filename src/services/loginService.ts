import { api } from "@/lib/axios"
import { User } from "@/types/user"

type loginResponse = {
    user: User
    message: string
}

export const loginService = async (email: string, password: string) => {
    const response = await api.post("/login", {
        email: email,
        password: password
    }, {
        withCredentials: true
    })

    const data: loginResponse = response.data

    return data
}