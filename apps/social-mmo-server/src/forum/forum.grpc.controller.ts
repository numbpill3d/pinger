import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ForumService } from "./forum.service";
import { ForumGrpcControllerBase } from "./base/forum.grpc.controller.base";

@swagger.ApiTags("forums")
@common.Controller("forums")
export class ForumGrpcController extends ForumGrpcControllerBase {
  constructor(protected readonly service: ForumService) {
    super(service);
  }
}
