import Image from "next/image"
import Link from "next/link"
import { LoginAreaButton } from "../login-area/login-area-button"
import { LoginAreaDialog } from "../login-area/login-area-dialog"
import { cookies } from "next/headers"
import { Cart } from "./cart/cart"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

export const Header = async () => {

    const cookieStore = await cookies()

    const token = cookieStore.get("token")

    const hour = new Date().getHours()

    return (
        <header className="border-b mb-6">
            <div className="w-full flex flex-col items-center px-2 mx-auto max-w-7xl md:flex-row">
                <div className="flex items-center">
                    <Link href={"/"}>
                        <Image
                            src="/logo/logo-brito-pizzaria.png"
                            alt="Brito Pizzaria Logo"
                            width={140}
                            height={140}
                        />
                    </Link>
                    <div className="">
                        <h1 className="text-xl font-semibold">Brito Pizzaria</h1>
                        {hour >= 18 && hour <= 23 &&
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></div>
                                <p>Aberto agora • fecha às 23h</p>
                            </div>
                        }
                        {(hour < 18 || hour > 23) &&
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                                <p>Fechado agora • abre às 18h</p>
                            </div>
                        }
                    </div>
                </div>
                <Tabs defaultValue="/" className="w-full mb-5 md:mb-0">
                    <TabsList variant="line" className="mx-auto">
                        <TabsTrigger value="/" asChild className="text-md">
                            <Link href="/">Todas</Link>
                        </TabsTrigger>
                        <TabsTrigger value="/pizzas/salgadas" className="text-md">
                            <Link href="/pizzas/salgadas">Salgadas</Link>
                        </TabsTrigger>
                        <TabsTrigger value="/pizzas/doces" asChild className="text-md">
                            <Link href="/pizzas/doces">Doces</Link>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <div className="flex gap-4 mb-5 md:mb-0">
                    <Cart />
                    <LoginAreaDialog />
                    <LoginAreaButton initialState={token ? true : false} />
                </div>
            </div>
        </header>
    )
}