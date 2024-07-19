import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClothingItemService } from "./clothingItem.service";
import { ClothingItemControllerBase } from "./base/clothingItem.controller.base";

@swagger.ApiTags("clothingItems")
@common.Controller("clothingItems")
export class ClothingItemController extends ClothingItemControllerBase {
  constructor(
    protected readonly service: ClothingItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
