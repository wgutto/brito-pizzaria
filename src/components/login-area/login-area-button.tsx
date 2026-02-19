"use client"

import { useAuth } from "@/stores/auth"
import Link from "next/link"
import { Button } from "../ui/button"
import { LogOut } from "lucide-react"
import { useEffect, useState } from "react"
import { api } from "@/lib/axios"

type Props = {
    initialState: boolean
}
export const LoginAreaButton = ({ initialState }: Props) => {
    const [authState, setAuthState] = useState(initialState)
    const auth = useAuth()

    useEffect(() => {
        setAuthState(auth.authenticated)
    }, [auth.authenticated])

    const handleLogout = async () => {

        await api.post("/logout", {}, {
            withCredentials: true
        })

        auth.logout()
    }

    if (authState) {
        return (
            <>
                <Link href={"/pedidos"}>
                    <Button className="cursor-pointer">Meus pedidos</Button>
                </Link>

                <Button 
                    onClick={handleLogout}
                    className="cursor-pointer"
                >
                    <LogOut className="size-5"/>
                </Button>
            </>
        )
    } else {
        return (
            <>
                <Button onClick={() => auth.setOpen(true)} className="cursor-pointer">Entrar</Button>
            </>
        )
    }

}