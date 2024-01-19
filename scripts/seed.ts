const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science Fundamentals" },
        { name: "Software Engineering Essentials" },
        { name: "Information System Basics" },
        { name: "Introduction to Programming" },
        { name: "Essential Data Structures" },
        { name: "Algorithmic Principles" },
        { name: "Problem Solving Strategies" },
        { name: "Business and Tech Integration" },
        { name: "Web Programming" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();