import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AvatarServiceBase } from "./base/avatar.service.base";

@Injectable()
export class AvatarService extends AvatarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
