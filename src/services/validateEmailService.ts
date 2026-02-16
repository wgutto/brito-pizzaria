import { api } from "@/lib/axios"

export const validateEmailService = async (email: string) => {
    const response = await api.post("/validate_email", {
        email: email
    })

    return response.data
}