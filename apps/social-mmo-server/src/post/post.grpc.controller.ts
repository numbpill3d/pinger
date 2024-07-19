import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostService } from "./post.service";
import { PostGrpcControllerBase } from "./base/post.grpc.controller.base";

@swagger.ApiTags("posts")
@common.Controller("posts")
export class PostGrpcController extends PostGrpcControllerBase {
  constructor(protected readonly service: PostService) {
    super(service);
  }
}
