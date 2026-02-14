import Image from "next/image"
import Link from "next/link"
import { Cart } from "./cart/Cart"
import { LoginAreaButton } from "../login-area/login-area-button"
import { LoginAreaDialog } from "../login-area/login-area-dialog"

export const Header = () => {

    return (
        <header className="flex justify-between items-center px-4">
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
                <LoginAreaButton/>
            </div>
        </header>
    )
}