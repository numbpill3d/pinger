import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ThreadServiceBase } from "./base/thread.service.base";

@Injectable()
export class ThreadService extends ThreadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
