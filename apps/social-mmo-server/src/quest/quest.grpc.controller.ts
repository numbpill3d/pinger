import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestService } from "./quest.service";
import { QuestGrpcControllerBase } from "./base/quest.grpc.controller.base";

@swagger.ApiTags("quests")
@common.Controller("quests")
export class QuestGrpcController extends QuestGrpcControllerBase {
  constructor(protected readonly service: QuestService) {
    super(service);
  }
}
