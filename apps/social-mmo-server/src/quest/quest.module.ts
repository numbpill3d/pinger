import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestModuleBase } from "./base/quest.module.base";
import { QuestService } from "./quest.service";
import { QuestController } from "./quest.controller";
import { QuestResolver } from "./quest.resolver";

@Module({
  imports: [QuestModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestController],
  providers: [QuestService, QuestResolver],
  exports: [QuestService],
})
export class QuestModule {}
