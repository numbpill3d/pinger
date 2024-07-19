import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestService } from "./quest.service";
import { QuestControllerBase } from "./base/quest.controller.base";

@swagger.ApiTags("quests")
@common.Controller("quests")
export class QuestController extends QuestControllerBase {
  constructor(
    protected readonly service: QuestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
