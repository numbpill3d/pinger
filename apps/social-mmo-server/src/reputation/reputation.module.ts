import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReputationModuleBase } from "./base/reputation.module.base";
import { ReputationService } from "./reputation.service";
import { ReputationController } from "./reputation.controller";
import { ReputationResolver } from "./reputation.resolver";

@Module({
  imports: [ReputationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReputationController],
  providers: [ReputationService, ReputationResolver],
  exports: [ReputationService],
})
export class ReputationModule {}
