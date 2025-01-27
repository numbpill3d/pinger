/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Quest as PrismaQuest,
  Reward as PrismaReward,
} from "@prisma/client";

export class QuestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.QuestCountArgs, "select">): Promise<number> {
    return this.prisma.quest.count(args);
  }

  async quests(args: Prisma.QuestFindManyArgs): Promise<PrismaQuest[]> {
    return this.prisma.quest.findMany(args);
  }
  async quest(args: Prisma.QuestFindUniqueArgs): Promise<PrismaQuest | null> {
    return this.prisma.quest.findUnique(args);
  }
  async createQuest(args: Prisma.QuestCreateArgs): Promise<PrismaQuest> {
    return this.prisma.quest.create(args);
  }
  async updateQuest(args: Prisma.QuestUpdateArgs): Promise<PrismaQuest> {
    return this.prisma.quest.update(args);
  }
  async deleteQuest(args: Prisma.QuestDeleteArgs): Promise<PrismaQuest> {
    return this.prisma.quest.delete(args);
  }

  async getReward(parentId: string): Promise<PrismaReward | null> {
    return this.prisma.quest
      .findUnique({
        where: { id: parentId },
      })
      .reward();
  }
}
