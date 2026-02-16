"use client"

import { useAuth } from "@/stores/auth"
import Link from "next/link"
import { Button } from "../ui/button"
import { LogOut } from "lucide-react"

export const LoginAreaButton = () => {
    const auth = useAuth()

    const handleLogout = () => {
        auth.logout()
    }

    if (auth.authenticated) {
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