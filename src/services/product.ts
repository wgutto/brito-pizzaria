import { prisma } from "@/lib/prisma"

export const getAllPizzas = async () => {
    const pizzas = await prisma.product.findMany({
        where: {
            category: {
                in: ['SAVORY_PIZZAS', 'SWEET_PIZZAS']
            }
        }
    })

    return pizzas
}

export const getSavoryPizzas = async () => {
    const savoryPizzas = await prisma.product.findMany({
        where: {
            category: 'SAVORY_PIZZAS'
        }
    })

    return savoryPizzas
}

export const getSweetPizzas = async () => {
    const sweetPizzas = await prisma.product.findMany({
        where: {
            category: 'SWEET_PIZZAS'
        }
    })

    return sweetPizzas
}