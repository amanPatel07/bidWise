/*
  Warnings:

  - Added the required column `buyerId` to the `Bid` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Bid" ADD COLUMN     "buyerId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Bid" ADD CONSTRAINT "Bid_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
