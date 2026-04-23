/*
  Warnings:

  - You are about to drop the `CustomerInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CustomerInfo" DROP CONSTRAINT "CustomerInfo_userId_fkey";

-- DropTable
DROP TABLE "CustomerInfo";

-- CreateTable
CREATE TABLE "customer_info" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "adress" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "creditCard" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_info_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "customer_info" ADD CONSTRAINT "customer_info_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
