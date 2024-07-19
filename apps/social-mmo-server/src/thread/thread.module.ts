import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ThreadModuleBase } from "./base/thread.module.base";
import { ThreadService } from "./thread.service";
import { ThreadController } from "./thread.controller";
import { ThreadResolver } from "./thread.resolver";

@Module({
  imports: [ThreadModuleBase, forwardRef(() => AuthModule)],
  controllers: [ThreadController],
  providers: [ThreadService, ThreadResolver],
  exports: [ThreadService],
})
export class ThreadModule {}
