
// import { PrismaClient } from '@prisma/client';

// const global = globalThis as unknown as {
//   // globalThis に型付きプロパティ "prisma" を追加
//   prisma: PrismaClient | undefined;
// }
// declare global {
//   var prisma: PrismaClient | undefined;
// }

// // const prisma = global.prisma ?? new PrismaClient();

// // 開発環境では global にキャッシュ
// // if (process.env.NODE_ENV !== 'production') {
// //   global.prisma = prisma;
// // }
// let prisma: PrismaClient;

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

// const prisma = new PrismaClient();

import { PrismaClient } from '../app/generated/prisma/client'
const prisma = new PrismaClient()

export default prisma;
// export { prisma };
