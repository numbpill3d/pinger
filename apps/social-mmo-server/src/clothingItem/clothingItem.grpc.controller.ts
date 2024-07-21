import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClothingItemService } from "./clothingItem.service";
import { ClothingItemGrpcControllerBase } from "./base/clothingItem.grpc.controller.base";

@swagger.ApiTags("clothingItems")
@common.Controller("clothingItems")
export class ClothingItemGrpcController extends ClothingItemGrpcControllerBase {
  constructor(protected readonly service: ClothingItemService) {
    super(service);
  }
}
