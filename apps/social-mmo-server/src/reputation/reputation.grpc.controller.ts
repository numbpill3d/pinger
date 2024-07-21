import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReputationService } from "./reputation.service";
import { ReputationGrpcControllerBase } from "./base/reputation.grpc.controller.base";

@swagger.ApiTags("reputations")
@common.Controller("reputations")
export class ReputationGrpcController extends ReputationGrpcControllerBase {
  constructor(protected readonly service: ReputationService) {
    super(service);
  }
}
