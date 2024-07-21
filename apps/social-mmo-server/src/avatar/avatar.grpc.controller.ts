import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AvatarService } from "./avatar.service";
import { AvatarGrpcControllerBase } from "./base/avatar.grpc.controller.base";

@swagger.ApiTags("avatars")
@common.Controller("avatars")
export class AvatarGrpcController extends AvatarGrpcControllerBase {
  constructor(protected readonly service: AvatarService) {
    super(service);
  }
}
