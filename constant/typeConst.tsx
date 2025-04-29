import { Prisma } from "../app/generated/prisma";
export type GameWithHanshuangsAndScores = Prisma.GameGetPayload<{
  include: {
    hanshuangs: {
      include: {
        scores: true, // ← ここが重要
      },
    },
  }
}>
export type HanshuangWithHanshuangScore = Prisma.HanshuangGetPayload<{
    include: { scores: true }
  }>
export type PlayerWithHanshuangScore = Prisma.PlayerGetPayload<{
  include: { scores: true }
}>