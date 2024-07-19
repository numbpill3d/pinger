import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReputationServiceBase } from "./base/reputation.service.base";

@Injectable()
export class ReputationService extends ReputationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
