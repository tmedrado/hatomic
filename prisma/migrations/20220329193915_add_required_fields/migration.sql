/*
  Warnings:

  - Added the required column `schedule` to the `Habit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Habit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "schedule" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
