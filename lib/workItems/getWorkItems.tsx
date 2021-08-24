import prisma from "lib/prisma";

export const getWorkItems = async () => {
  /**
   * Fetch work items from db
   */
  const workItems = await prisma.workItem.findMany({
    include: {
      stackItems: {
        take: 3,
        orderBy: {
          displayOrder: "asc",
        },
        include: {
          stackItem: true,
        },
      },
    },
  });

  /**
   * Map through each result and change the Date objects to strings (<month name> <year>)
   */
  const dateToStr = (d: Date): string =>
    d.toLocaleString("default", { month: "long" }) + " " + d.getFullYear();

  let workItemsTransformed = workItems.map((w) => ({
    ...w,
    startDate: dateToStr(w.startDate),
    endDate: dateToStr(w.endDate),
  }));

  return workItemsTransformed;
};
