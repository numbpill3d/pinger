import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AvatarModuleBase } from "./base/avatar.module.base";
import { AvatarService } from "./avatar.service";
import { AvatarController } from "./avatar.controller";
import { AvatarResolver } from "./avatar.resolver";

@Module({
  imports: [AvatarModuleBase, forwardRef(() => AuthModule)],
  controllers: [AvatarController],
  providers: [AvatarService, AvatarResolver],
  exports: [AvatarService],
})
export class AvatarModule {}
