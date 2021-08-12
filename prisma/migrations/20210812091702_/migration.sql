/*
  Warnings:

  - Added the required column `aboutTheBusiness` to the `WorkItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personalHighlights` to the `WorkItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `theStory` to the `WorkItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workInvolved` to the `WorkItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkItem" ADD COLUMN     "aboutTheBusiness" TEXT NOT NULL,
ADD COLUMN     "personalHighlights" TEXT NOT NULL,
ADD COLUMN     "theStory" TEXT NOT NULL,
ADD COLUMN     "workInvolved" TEXT NOT NULL;
