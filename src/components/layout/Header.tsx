import Image from "next/image"
import Link from "next/link"
import { LoginAreaButton } from "../login-area/login-area-button"
import { LoginAreaDialog } from "../login-area/login-area-dialog"
import { cookies } from "next/headers"
import { Cart } from "./cart/cart"

export const Header = async () => {

    const cookieStore = await cookies()

    const token = cookieStore.get("token")

    return (
        <header className="w-full flex flex-col mb-5 min-[400]:flex-row min-[400]:mb-0 justify-between items-center px-4 lg:px-24">
                <Link href={"/"}>
                    <Image
                        src="/logo/logo-brito-pizzaria.png"
                        alt="Brito Pizzaria Logo"
                        width={140}
                        height={140}
                    />
                </Link>

            <div className="flex gap-4">
                <Cart/>
                <LoginAreaDialog/>
                <LoginAreaButton initialState={token ? true : false}/>
            </div>
        </header>
    )
}