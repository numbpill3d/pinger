import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ThreadService } from "./thread.service";
import { ThreadControllerBase } from "./base/thread.controller.base";

@swagger.ApiTags("threads")
@common.Controller("threads")
export class ThreadController extends ThreadControllerBase {
  constructor(
    protected readonly service: ThreadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
