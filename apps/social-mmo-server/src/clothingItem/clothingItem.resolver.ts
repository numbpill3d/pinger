import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ClothingItemResolverBase } from "./base/clothingItem.resolver.base";
import { ClothingItem } from "./base/ClothingItem";
import { ClothingItemService } from "./clothingItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ClothingItem)
export class ClothingItemResolver extends ClothingItemResolverBase {
  constructor(
    protected readonly service: ClothingItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
