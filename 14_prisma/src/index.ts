import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
  await client.user.create({
    data: {
      username: "supriya",
      password: "hehe",
      age: 20,
      city: "agartala",
    },
  });
}

createUser();

async function deleteUser() {
  await client.user.delete({
    where: {
      id: 1,
    },
  });
}
//deleteUser();

async function updateUser() {
  await client.user.update({
    where: {
      id: 1,
    },
    data: {
      username: "sup",
    },
  });
}
updateUser();
