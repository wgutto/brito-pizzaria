"use client"

import { useAuth } from "@/stores/auth"
import Link from "next/link"
import { Button } from "../ui/button"

export const LoginAreaButton = () => {
    const auth = useAuth()

    const handleLogout = () => {
        auth.logout()
    }

    if (auth.authenticated) {
        return (
            <>
                <Link href={"/pedidos"}>
                    <Button>Meus pedidos</Button>
                </Link>

                <Button onClick={handleLogout}>Sair</Button>
            </>
        )
    } else {
        return (
            <>
                <Button onClick={() => auth.setOpen(true)} className="cursor-pointer">Login / Cadastro</Button>
            </>
        )
    }

}