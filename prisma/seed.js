const prisma = require("../prisma");

const seed = async () => {
  const authorData = await prisma.author.create({
    data: {
      name: "Joe Mama",
      books: {
        create: [
          { title: "Joe Mama: The Reckoning" },
          { title: "Joe Mama: The Redemption of Joe Mama" },
        ],
      },
    },
  });

  await prisma.author.create({
    data: {
      name: "Takumi Fujiwara",
      books: {
        create: [
          { title: "Joe Mama: The Reckoning" },
          { title: "Joe Mama: The Redemption of Joe Mama" },
        ],
      },
    },
  });

  await prisma.author.create({
    data: {
      name: "Julia Hocken",
      books: {
        create: [
          { title: "How to survive a bootcamp" },
          { title: "Eating your feelings with Ben&Jerry's" },
        ],
      },
    },
  });

  await prisma.author.create({
    data: {
      name: "Alex Hocken",
      books: {
        create: [
          { title: "Supporting your wife through a bootcamp" },
          { title: "Staying fit through playing soccer" },
        ],
      },
    },
  });

  await prisma.author.create({
    data: {
      name: "Lester, Dax, and Ellen",
      books: {
        create: [
          { title: "Teaching students how to bootcamp" },
          { title: "What to do while students are doing their workshops" },
        ],
      },
    },
  });

  await prisma.author.create({
    data: {
      name: "Fullstack academy",
      books: {
        create: [
          { title: "How to get people to do bootcamps" },
          { title: "How to market to all ages" },
        ],
      },
    },
  });

  await prisma.author.create({
    data: {
      name: "Lila Arf",
      books: {
        create: [
          { title: "How to teach students History" },
          { title: "Should I keep teaching" },
        ],
      },
    },
  });

  await prisma.author.create({
    data: {
      name: "Dante Arf",
      books: {
        create: [
          { title: "Running triathlons" },
          { title: "Joe Mama: The Redemption of Joe Mama" },
        ],
      },
    },
  });

};


seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });