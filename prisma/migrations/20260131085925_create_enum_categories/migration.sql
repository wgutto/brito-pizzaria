/*
  Warnings:

  - The `category` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Categories" AS ENUM ('ALL', 'SAVORY_PIZZAS', 'SWEET_PIZZAS', 'DRINKS', 'HAMBURGERS');

-- AlterTable
ALTER TABLE "products" DROP COLUMN "category",
ADD COLUMN     "category" "Categories" NOT NULL DEFAULT 'ALL';
