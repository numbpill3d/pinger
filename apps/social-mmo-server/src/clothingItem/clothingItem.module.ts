import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClothingItemModuleBase } from "./base/clothingItem.module.base";
import { ClothingItemService } from "./clothingItem.service";
import { ClothingItemController } from "./clothingItem.controller";
import { ClothingItemResolver } from "./clothingItem.resolver";

@Module({
  imports: [ClothingItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClothingItemController],
  providers: [ClothingItemService, ClothingItemResolver],
  exports: [ClothingItemService],
})
export class ClothingItemModule {}
