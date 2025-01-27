/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ClothingItem } from "./ClothingItem";
import { ClothingItemCountArgs } from "./ClothingItemCountArgs";
import { ClothingItemFindManyArgs } from "./ClothingItemFindManyArgs";
import { ClothingItemFindUniqueArgs } from "./ClothingItemFindUniqueArgs";
import { DeleteClothingItemArgs } from "./DeleteClothingItemArgs";
import { ClothingItemService } from "../clothingItem.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ClothingItem)
export class ClothingItemResolverBase {
  constructor(
    protected readonly service: ClothingItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ClothingItem",
    action: "read",
    possession: "any",
  })
  async _clothingItemsMeta(
    @graphql.Args() args: ClothingItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ClothingItem])
  @nestAccessControl.UseRoles({
    resource: "ClothingItem",
    action: "read",
    possession: "any",
  })
  async clothingItems(
    @graphql.Args() args: ClothingItemFindManyArgs
  ): Promise<ClothingItem[]> {
    return this.service.clothingItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ClothingItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ClothingItem",
    action: "read",
    possession: "own",
  })
  async clothingItem(
    @graphql.Args() args: ClothingItemFindUniqueArgs
  ): Promise<ClothingItem | null> {
    const result = await this.service.clothingItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ClothingItem)
  @nestAccessControl.UseRoles({
    resource: "ClothingItem",
    action: "delete",
    possession: "any",
  })
  async deleteClothingItem(
    @graphql.Args() args: DeleteClothingItemArgs
  ): Promise<ClothingItem | null> {
    try {
      return await this.service.deleteClothingItem(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
