import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RewardService } from "./reward.service";
import { RewardGrpcControllerBase } from "./base/reward.grpc.controller.base";

@swagger.ApiTags("rewards")
@common.Controller("rewards")
export class RewardGrpcController extends RewardGrpcControllerBase {
  constructor(protected readonly service: RewardService) {
    super(service);
  }
}
