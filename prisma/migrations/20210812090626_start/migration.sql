-- CreateTable
CREATE TABLE "WorkItem" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "teaser" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "thumbUrl" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StackItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "href" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkItemStack" (
    "workItemId" INTEGER NOT NULL,
    "stackItemId" INTEGER NOT NULL,
    "displayOrder" INTEGER NOT NULL,

    PRIMARY KEY ("workItemId","stackItemId")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkItem.slug_unique" ON "WorkItem"("slug");

-- AddForeignKey
ALTER TABLE "WorkItemStack" ADD FOREIGN KEY ("workItemId") REFERENCES "WorkItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkItemStack" ADD FOREIGN KEY ("stackItemId") REFERENCES "StackItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
