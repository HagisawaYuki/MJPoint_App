
export const dynamic = 'force-dynamic';

import { PrismaClient } from '../app/generated/prisma/client'
const prisma = new PrismaClient()

export default prisma;
// export { prisma };

// import { PrismaClient } from '../app/generated/prisma/client';

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
//   });

// if (process.env.NODE_ENV === 'development') globalForPrisma.prisma = prisma;
