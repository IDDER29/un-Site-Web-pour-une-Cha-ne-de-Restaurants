/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `category` table. All the data in the column will be lost.
  - The primary key for the `employee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `employee_id` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `employee` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `employee` table. All the data in the column will be lost.
  - The primary key for the `meal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryId` on the `meal` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `meal` table. All the data in the column will be lost.
  - You are about to drop the column `meal_id` on the `meal` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `meal` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `meal` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `meal` table. All the data in the column will be lost.
  - The primary key for the `newsletter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `newsletter` table. All the data in the column will be lost.
  - You are about to drop the column `newsletter_id` on the `newsletter` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `newsletter` table. All the data in the column will be lost.
  - You are about to drop the column `subscribedAt` on the `newsletter` table. All the data in the column will be lost.
  - The primary key for the `restaurant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `restaurant_address` on the `restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `restaurant_city` on the `restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `restaurant_email` on the `restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `restaurant_id` on the `restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `restaurant_name` on the `restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `restaurant_phone` on the `restaurant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Email]` on the table `Newsletter` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Name]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Phone]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Email]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `CategoryID` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EmployeeID` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `FirstName` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LastName` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RestaurantID` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CategoryID` to the `Meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Description` to the `Meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Image` to the `Meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MealID` to the `Meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `Meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Price` to the `Meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RestaurantID` to the `Meal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Email` to the `Newsletter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NewsletterID` to the `Newsletter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Address` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Email` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Name` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Phone` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RestaurantID` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Category_restaurantId_fkey` ON `category`;

-- DropIndex
DROP INDEX `Employee_restaurantId_fkey` ON `employee`;

-- DropIndex
DROP INDEX `Meal_categoryId_fkey` ON `meal`;

-- DropIndex
DROP INDEX `Meal_restaurantId_fkey` ON `meal`;

-- DropIndex
DROP INDEX `Newsletter_email_key` ON `newsletter`;

-- DropIndex
DROP INDEX `Newsletter_restaurantId_fkey` ON `newsletter`;

-- DropIndex
DROP INDEX `Restaurant_restaurant_email_key` ON `restaurant`;

-- DropIndex
DROP INDEX `Restaurant_restaurant_name_key` ON `restaurant`;

-- DropIndex
DROP INDEX `Restaurant_restaurant_phone_key` ON `restaurant`;

-- AlterTable
ALTER TABLE `category` DROP PRIMARY KEY,
    DROP COLUMN `category_id`,
    DROP COLUMN `name`,
    DROP COLUMN `restaurantId`,
    ADD COLUMN `CategoryID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `Image` VARCHAR(191) NULL,
    ADD COLUMN `Name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`CategoryID`);

-- AlterTable
ALTER TABLE `employee` DROP PRIMARY KEY,
    DROP COLUMN `employee_id`,
    DROP COLUMN `name`,
    DROP COLUMN `position`,
    DROP COLUMN `restaurantId`,
    ADD COLUMN `EmployeeID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `FirstName` VARCHAR(191) NOT NULL,
    ADD COLUMN `LastName` VARCHAR(191) NOT NULL,
    ADD COLUMN `RestaurantID` INTEGER NOT NULL,
    ADD COLUMN `Role` ENUM('CHEF', 'RESTAURANT_MANAGER', 'EMPLOYEE', 'ADMIN') NOT NULL DEFAULT 'EMPLOYEE',
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`EmployeeID`);

-- AlterTable
ALTER TABLE `meal` DROP PRIMARY KEY,
    DROP COLUMN `categoryId`,
    DROP COLUMN `description`,
    DROP COLUMN `meal_id`,
    DROP COLUMN `name`,
    DROP COLUMN `price`,
    DROP COLUMN `restaurantId`,
    ADD COLUMN `CategoryID` INTEGER NOT NULL,
    ADD COLUMN `Description` VARCHAR(191) NOT NULL,
    ADD COLUMN `Image` VARCHAR(191) NOT NULL,
    ADD COLUMN `MealID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `Name` VARCHAR(191) NOT NULL,
    ADD COLUMN `Price` DOUBLE NOT NULL,
    ADD COLUMN `RestaurantID` INTEGER NOT NULL,
    ADD PRIMARY KEY (`MealID`);

-- AlterTable
ALTER TABLE `newsletter` DROP PRIMARY KEY,
    DROP COLUMN `email`,
    DROP COLUMN `newsletter_id`,
    DROP COLUMN `restaurantId`,
    DROP COLUMN `subscribedAt`,
    ADD COLUMN `ClientID` INTEGER NULL,
    ADD COLUMN `Email` VARCHAR(191) NOT NULL,
    ADD COLUMN `NewsletterID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `SubscriptionDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `restaurantRestaurantID` INTEGER NULL,
    ADD PRIMARY KEY (`NewsletterID`);

-- AlterTable
ALTER TABLE `restaurant` DROP PRIMARY KEY,
    DROP COLUMN `restaurant_address`,
    DROP COLUMN `restaurant_city`,
    DROP COLUMN `restaurant_email`,
    DROP COLUMN `restaurant_id`,
    DROP COLUMN `restaurant_name`,
    DROP COLUMN `restaurant_phone`,
    ADD COLUMN `Address` VARCHAR(191) NOT NULL,
    ADD COLUMN `Email` VARCHAR(191) NOT NULL,
    ADD COLUMN `Image` VARCHAR(191) NULL,
    ADD COLUMN `Name` VARCHAR(191) NOT NULL,
    ADD COLUMN `Phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `RestaurantID` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`RestaurantID`);

-- CreateTable
CREATE TABLE `Reservation` (
    `ReservationID` INTEGER NOT NULL AUTO_INCREMENT,
    `ClientID` INTEGER NOT NULL,
    `RestaurantID` INTEGER NOT NULL,
    `DateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `NumberOfPeople` INTEGER NOT NULL,

    PRIMARY KEY (`ReservationID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `ClientID` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(191) NOT NULL,
    `LastName` VARCHAR(191) NOT NULL,
    `Phone` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Image` VARCHAR(191) NULL,

    UNIQUE INDEX `Client_Phone_key`(`Phone`),
    UNIQUE INDEX `Client_Email_key`(`Email`),
    PRIMARY KEY (`ClientID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Newsletter_Email_key` ON `Newsletter`(`Email`);

-- CreateIndex
CREATE UNIQUE INDEX `Restaurant_Name_key` ON `Restaurant`(`Name`);

-- CreateIndex
CREATE UNIQUE INDEX `Restaurant_Phone_key` ON `Restaurant`(`Phone`);

-- CreateIndex
CREATE UNIQUE INDEX `Restaurant_Email_key` ON `Restaurant`(`Email`);

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_RestaurantID_fkey` FOREIGN KEY (`RestaurantID`) REFERENCES `Restaurant`(`RestaurantID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Meal` ADD CONSTRAINT `Meal_CategoryID_fkey` FOREIGN KEY (`CategoryID`) REFERENCES `Category`(`CategoryID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Meal` ADD CONSTRAINT `Meal_RestaurantID_fkey` FOREIGN KEY (`RestaurantID`) REFERENCES `Restaurant`(`RestaurantID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_ClientID_fkey` FOREIGN KEY (`ClientID`) REFERENCES `Client`(`ClientID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_RestaurantID_fkey` FOREIGN KEY (`RestaurantID`) REFERENCES `Restaurant`(`RestaurantID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Newsletter` ADD CONSTRAINT `Newsletter_ClientID_fkey` FOREIGN KEY (`ClientID`) REFERENCES `Client`(`ClientID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Newsletter` ADD CONSTRAINT `Newsletter_restaurantRestaurantID_fkey` FOREIGN KEY (`restaurantRestaurantID`) REFERENCES `Restaurant`(`RestaurantID`) ON DELETE SET NULL ON UPDATE CASCADE;
