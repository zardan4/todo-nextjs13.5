// dealing with hot reloading problem
// when next.js creates new connection every time the project file is updated

import { PrismaClient } from "@prisma/client"

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ["query"],
    })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma