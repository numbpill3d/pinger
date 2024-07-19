import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RewardService } from "./reward.service";
import { RewardControllerBase } from "./base/reward.controller.base";

@swagger.ApiTags("rewards")
@common.Controller("rewards")
export class RewardController extends RewardControllerBase {
  constructor(
    protected readonly service: RewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
