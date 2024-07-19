import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestServiceBase } from "./base/quest.service.base";

@Injectable()
export class QuestService extends QuestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
