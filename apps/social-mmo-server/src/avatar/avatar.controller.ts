import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AvatarService } from "./avatar.service";
import { AvatarControllerBase } from "./base/avatar.controller.base";

@swagger.ApiTags("avatars")
@common.Controller("avatars")
export class AvatarController extends AvatarControllerBase {
  constructor(
    protected readonly service: AvatarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
