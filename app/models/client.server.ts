import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getClient(id: number) {
  return prisma.client.findUnique({ where: { id } });
}

export async function getClients() {
  return prisma.client.findMany();
}

export async function createClient(data: any) {
  return prisma.client.create({ data });
}

export async function updateClient(id: number, data: any) {
  return prisma.client.update({ where: { id }, data });
}

export async function deleteClient(id: number) {
  return prisma.client.delete({ where: { id } });
}
