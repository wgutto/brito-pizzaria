import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"

export const Cart = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="cursor-pointer">
                        <ShoppingCart className="size-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="flex items-center gap-2">
                            <ShoppingCart className="size-7"/>
                            <p className="text-3xl">Carrinho</p>
                        </SheetTitle>
                        <SheetDescription className="text-md">Lista de produtos no carrinho.</SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}