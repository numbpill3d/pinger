import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RewardModuleBase } from "./base/reward.module.base";
import { RewardService } from "./reward.service";
import { RewardController } from "./reward.controller";
import { RewardResolver } from "./reward.resolver";

@Module({
  imports: [RewardModuleBase, forwardRef(() => AuthModule)],
  controllers: [RewardController],
  providers: [RewardService, RewardResolver],
  exports: [RewardService],
})
export class RewardModule {}
