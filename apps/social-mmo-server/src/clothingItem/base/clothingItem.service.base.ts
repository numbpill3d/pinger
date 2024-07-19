/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ClothingItem as PrismaClothingItem } from "@prisma/client";

export class ClothingItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ClothingItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.clothingItem.count(args);
  }

  async clothingItems(
    args: Prisma.ClothingItemFindManyArgs
  ): Promise<PrismaClothingItem[]> {
    return this.prisma.clothingItem.findMany(args);
  }
  async clothingItem(
    args: Prisma.ClothingItemFindUniqueArgs
  ): Promise<PrismaClothingItem | null> {
    return this.prisma.clothingItem.findUnique(args);
  }
  async createClothingItem(
    args: Prisma.ClothingItemCreateArgs
  ): Promise<PrismaClothingItem> {
    return this.prisma.clothingItem.create(args);
  }
  async updateClothingItem(
    args: Prisma.ClothingItemUpdateArgs
  ): Promise<PrismaClothingItem> {
    return this.prisma.clothingItem.update(args);
  }
  async deleteClothingItem(
    args: Prisma.ClothingItemDeleteArgs
  ): Promise<PrismaClothingItem> {
    return this.prisma.clothingItem.delete(args);
  }
}