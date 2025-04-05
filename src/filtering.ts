import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const filtering = async () => {
  // AND filtering
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  //   console.log(andFiltering);

  // OR filtering
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  //   console.log(orFiltering);

  // OR filtering
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
      ],
    },
  });
  //   console.log(notFiltering);

  // starts with

  const startsWith = await prisma.post.findMany({
    where: {
      title: {
        startsWith: "that",
      },
    },
  });
  //   console.log(startsWith);

  // ends with

  const endsWith = await prisma.post.findMany({
    where: {
      title: {
        endsWith: "post",
      },
    },
  });
  //   console.log(endsWith);

  // equals

  const equals = await prisma.post.findMany({
    where: {
      title: {
        equals: "that is sub post",
      },
    },
  });
  //   console.log(equals);

  


};

filtering();
