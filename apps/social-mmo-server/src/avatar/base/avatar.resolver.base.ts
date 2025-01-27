/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Avatar } from "./Avatar";
import { AvatarCountArgs } from "./AvatarCountArgs";
import { AvatarFindManyArgs } from "./AvatarFindManyArgs";
import { AvatarFindUniqueArgs } from "./AvatarFindUniqueArgs";
import { DeleteAvatarArgs } from "./DeleteAvatarArgs";
import { AvatarService } from "../avatar.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Avatar)
export class AvatarResolverBase {
  constructor(
    protected readonly service: AvatarService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Avatar",
    action: "read",
    possession: "any",
  })
  async _avatarsMeta(
    @graphql.Args() args: AvatarCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Avatar])
  @nestAccessControl.UseRoles({
    resource: "Avatar",
    action: "read",
    possession: "any",
  })
  async avatars(@graphql.Args() args: AvatarFindManyArgs): Promise<Avatar[]> {
    return this.service.avatars(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Avatar, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Avatar",
    action: "read",
    possession: "own",
  })
  async avatar(
    @graphql.Args() args: AvatarFindUniqueArgs
  ): Promise<Avatar | null> {
    const result = await this.service.avatar(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Avatar)
  @nestAccessControl.UseRoles({
    resource: "Avatar",
    action: "delete",
    possession: "any",
  })
  async deleteAvatar(
    @graphql.Args() args: DeleteAvatarArgs
  ): Promise<Avatar | null> {
    try {
      return await this.service.deleteAvatar(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
