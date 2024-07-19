import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClothingItemServiceBase } from "./base/clothingItem.service.base";

@Injectable()
export class ClothingItemService extends ClothingItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
