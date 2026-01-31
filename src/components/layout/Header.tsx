import Image from "next/image"
import { Button } from "../ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Cart } from "./cart/Cart"

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


                <Button className="cursor-pointer">
                    Login / Cadastro
                </Button>
            </div>
        </header>
    )
}