/*
  Warnings:

  - You are about to drop the `customer_info` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "customer_info" DROP CONSTRAINT "customer_info_userId_fkey";

-- DropTable
DROP TABLE "customer_info";

-- CreateTable
CREATE TABLE "user_info" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "adress" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "creditCard" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "user_info_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_info" ADD CONSTRAINT "user_info_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
