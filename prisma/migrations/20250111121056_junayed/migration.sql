/*
  Warnings:

  - You are about to drop the column `user_name` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `user_user_name_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `user_name`;
