import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Prisma } from "./generated/prisma/client"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const decimalToMoney = (price: number | string | Prisma.Decimal) => {
  return parseFloat(price.toString()).toLocaleString("pt-BR",
    {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
}

const SIZE_MULTIPLIERS: Record<string, number> = {
  pequena: 0.8,
  media: 1,
  grande: 1.3,
}

export const EDGE_PRICES: Record<string, number> = {
  "Sem borda": 0,
  "Borda recheada": 5,
}

export const calculatePizzaFinalPrice = (basePrice: number, size: string, edge: string): number => {
  return basePrice * (SIZE_MULTIPLIERS[size] ?? 1) + (EDGE_PRICES[edge] ?? 0)
}
