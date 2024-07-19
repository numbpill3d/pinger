import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "forum",
      "thread",
      "post",
      "event",
      "reward",
      "quest",
      "reputation",
      "user",
      "clothingitem",
      "avatar"
    ],
    protoPath: [
      "src/forum/forum.proto",
      "src/thread/thread.proto",
      "src/post/post.proto",
      "src/event/event.proto",
      "src/reward/reward.proto",
      "src/quest/quest.proto",
      "src/reputation/reputation.proto",
      "src/user/user.proto",
      "src/clothingitem/clothingitem.proto",
      "src/avatar/avatar.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
