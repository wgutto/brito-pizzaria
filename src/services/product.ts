import { prisma } from "@/lib/prisma"

export const getAllProducts = async () => {
    const products = await prisma.product.findMany()

    return products
}