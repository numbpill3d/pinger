import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RewardServiceBase } from "./base/reward.service.base";

@Injectable()
export class RewardService extends RewardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
