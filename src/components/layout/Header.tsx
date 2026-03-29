import Image from "next/image"
import Link from "next/link"
import { LoginAreaButton } from "../login-area/login-area-button"
import { LoginAreaDialog } from "../login-area/login-area-dialog"
import { cookies } from "next/headers"
import { Cart } from "./cart/cart"

export const Header = async () => {

    const cookieStore = await cookies()

    const token = cookieStore.get("token")

    const hour = new Date().getHours()

    return (
        <header className="w-full flex flex-col mb-5 min-[400]:flex-row min-[400]:mb-0 justify-between items-center px-4 lg:px-24">
            <div className="flex items-center">
                <Link href={"/"}>
                    <Image
                        src="/logo/logo-brito-pizzaria.png"
                        alt="Brito Pizzaria Logo"
                        width={140}
                        height={140}
                    />
                </Link>

                <div>
                    <h1 className="text-xl font-semibold">Brito Pizzaria</h1>

                    {hour >= 18 && hour <= 23 &&
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></div>
                            <p>Aberto agora • fecha às 23h</p>
                        </div>
                    }


                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                        <p>Fechado agora • abre às 18h</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <Cart />
                <LoginAreaDialog />
                <LoginAreaButton initialState={token ? true : false} />
            </div>
        </header>
    )
}