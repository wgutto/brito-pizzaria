import { PrismaPg } from "@prisma/adapter-pg";
import { Categories, PrismaClient } from "../src/lib/generated/prisma/client"

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })

const prisma = new PrismaClient( { adapter } )
async function main() {
    const products = [
        {
            id: 1,
            name: 'Calabresa com Cebola',
            price: 42.9,
            image: 'calabresa.jpg',
            ingredients: 'Calabresa, cebola, mussarela, molho de tomate',
            category: Categories.SAVORY_PIZZAS
        },
        {
            id: 2,
            name: 'Margherita',
            price: 39.9,
            image: 'margherita.jpg',
            ingredients: 'Mussarela, tomate, manjericão, molho de tomate',
            category: Categories.SAVORY_PIZZAS
        },
        {
            id: 3,
            name: 'Quatro Queijos',
            price: 47.5,
            image: 'quatro-queijos.jpg',
            ingredients: 'Mussarela, parmesão, gorgonzola, provolone, molho de tomate',
            category: Categories.SAVORY_PIZZAS
        },
        {
            id: 4,
            name: 'Pepperoni',
            price: 44.9,
            image: 'pepperoni.jpg',
            ingredients: 'Pepperoni, mussarela, molho de tomate',
            category: Categories.SAVORY_PIZZAS
        },
        {
            id: 5,
            name: 'Portuguesa',
            price: 45.0,
            image: 'portuguesa.jpg',
            ingredients: 'Presunto, ovo, cebola, azeitona, mussarela, molho de tomate',
            category: Categories.SAVORY_PIZZAS
        },
        {
            id: 6,
            name: 'Vegetariana',
            price: 41.5,
            image: 'vegetariana.jpg',
            ingredients: 'Pimentão, cebola, tomate, champignon, milho, mussarela, molho de tomate',
            category: Categories.SAVORY_PIZZAS
        },
        {
            id: 7,
            name: 'Mussarela',
            price: 41,
            image: 'mussarela.jpg',
            ingredients: 'Molho de tomate, queijo mussarela, Azeite de oliva, Orégano',
            category: Categories.SAVORY_PIZZAS
        },
        {
            id: 8,
            name: 'Frango com Catupiry',
            price: 44,
            image: 'frango-catupiry.jpg',
            ingredients: 'Molho de tomate, queijo mussarela, Frango desfiado e temperado, catupiry, Azeite de oliva, Orégano',
            category: Categories.SAVORY_PIZZAS
        },
        {
            id: 9,
            name: 'Morango com Chocolate',
            price: 51,
            image: 'morango-chocolate.jpg',
            ingredients: 'Chocolate ao leite, morangos frescos fatiados, leite condensado',
            category: Categories.SWEET_PIZZAS
        },
        {
            id: 10,
            name: 'Banana com leite condensado',
            price: 49,
            image: 'banana-com-condensado.jpg',
            ingredients: 'Bananas maduras fatiadas, leite condensado, canela em pó',
            category: Categories.SWEET_PIZZAS
        }
    ];


    for (let product of products) {
        await prisma.product.upsert({
            where: { id: product.id },
            update: {},
            create: {
                name: product.name,
                price: product.price,
                image: product.image,
                ingredients: product.ingredients,
                category: product.category
            }
        });
    }
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })