import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { Button } from "../ui/button"
import { useState } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { calculatePizzaFinalPrice, decimalToMoney } from "@/lib/utils"
import { useCart } from "@/stores/cart"
import Image from "next/image"
import { ProductType } from "@/types/product"

type Props = {
    pizza: ProductType
    openModal: boolean
    closeModal: () => void
}
export const DetailsModal = ({ pizza, openModal, closeModal }: Props) => {
    const [selectedSize, setSelectedSize] = useState("media")
    const [selectedEdge, setSelectedEdge] = useState("Sem borda")
    const cart = useCart()

    const priceAsNummber = Number(pizza.price)
    const finalPrice = calculatePizzaFinalPrice(priceAsNummber, selectedSize, selectedEdge)

    const handleConfirm = () => {
        cart.addItem({
            productId: pizza.id,
            quantity: 1,
            size: selectedSize,
            edge: selectedEdge,
            finalPrice: finalPrice
        })
        closeModal()
        cart.setOpen(true)
    }

    return (
        <Dialog open={openModal} onOpenChange={closeModal}>
            <DialogContent className="flex flex-col gap-6">
                <DialogHeader>
                    <DialogTitle>Detalhes</DialogTitle>
                    <DialogDescription>Escolha mais detalhes sobre sua Pizza.</DialogDescription>
                </DialogHeader>

                <div className="flex items-center gap-5">
                    <Image
                        src={pizza.image}
                        alt={pizza.name}
                        width={100}
                        height={100}
                        unoptimized
                        className="rounded-full"
                    />
                    <div>
                        <h2 className="font-semibold">{pizza.name}</h2>
                        <p className="text-muted-foreground">{pizza.ingredients}.</p>


                    </div>
                </div>

                <div className="w-full flex items-center gap-4">
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                        <SelectTrigger className="w-50">
                            <SelectValue placeholder="Selecione o tamanho" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="pequena">P</SelectItem>
                                <SelectItem value="media">M</SelectItem>
                                <SelectItem value="grande">G</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <Select value={selectedEdge} onValueChange={setSelectedEdge}>
                        <SelectTrigger className="w-50">
                            <SelectValue placeholder="Selecione a borda" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="Sem borda">Sem borda</SelectItem>
                                <SelectItem value="Borda recheada">Borda recheada</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex justify-between items-center">

                    <p className="font-semibold">{decimalToMoney(finalPrice)}</p>

                    <Button 
                        onClick={handleConfirm}
                        className="bg-green-600 cursor-pointer hover:bg-green-700">Confirmar</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}