import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ThreadService } from "./thread.service";
import { ThreadGrpcControllerBase } from "./base/thread.grpc.controller.base";

@swagger.ApiTags("threads")
@common.Controller("threads")
export class ThreadGrpcController extends ThreadGrpcControllerBase {
  constructor(protected readonly service: ThreadService) {
    super(service);
  }
}
