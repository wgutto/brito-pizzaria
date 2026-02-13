import { User } from "./user"

export type authResponse = {
    user: User
    auth: {
        token: string
    }
}