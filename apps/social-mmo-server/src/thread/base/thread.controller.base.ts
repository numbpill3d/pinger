/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ThreadService } from "../thread.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ThreadCreateInput } from "./ThreadCreateInput";
import { Thread } from "./Thread";
import { Post } from "../../post/base/Post";
import { ThreadFindManyArgs } from "./ThreadFindManyArgs";
import { ThreadWhereUniqueInput } from "./ThreadWhereUniqueInput";
import { ThreadUpdateInput } from "./ThreadUpdateInput";
import { PostFindManyArgs } from "../../post/base/PostFindManyArgs";
import { PostWhereUniqueInput } from "../../post/base/PostWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ThreadControllerBase {
  constructor(
    protected readonly service: ThreadService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Thread })
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ThreadCreateInput,
  })
  async createThread(@common.Body() data: ThreadCreateInput): Promise<Thread> {
    return await this.service.createThread({
      data: {
        ...data,

        forum: data.forum
          ? {
              connect: data.forum,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,
        title: true,

        forum: {
          select: {
            id: true,
          },
        },

        creator: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Thread] })
  @ApiNestedQuery(ThreadFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async threads(@common.Req() request: Request): Promise<Thread[]> {
    const args = plainToClass(ThreadFindManyArgs, request.query);
    return this.service.threads({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,
        title: true,

        forum: {
          select: {
            id: true,
          },
        },

        creator: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Thread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async thread(
    @common.Param() params: ThreadWhereUniqueInput
  ): Promise<Thread | null> {
    const result = await this.service.thread({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,
        title: true,

        forum: {
          select: {
            id: true,
          },
        },

        creator: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Thread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ThreadUpdateInput,
  })
  async updateThread(
    @common.Param() params: ThreadWhereUniqueInput,
    @common.Body() data: ThreadUpdateInput
  ): Promise<Thread | null> {
    try {
      return await this.service.updateThread({
        where: params,
        data: {
          ...data,

          forum: data.forum
            ? {
                connect: data.forum,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          content: true,
          title: true,

          forum: {
            select: {
              id: true,
            },
          },

          creator: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Thread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteThread(
    @common.Param() params: ThreadWhereUniqueInput
  ): Promise<Thread | null> {
    try {
      return await this.service.deleteThread({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          content: true,
          title: true,

          forum: {
            select: {
              id: true,
            },
          },

          creator: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/posts")
  @ApiNestedQuery(PostFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "read",
    possession: "any",
  })
  async findPosts(
    @common.Req() request: Request,
    @common.Param() params: ThreadWhereUniqueInput
  ): Promise<Post[]> {
    const query = plainToClass(PostFindManyArgs, request.query);
    const results = await this.service.findPosts(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        content: true,

        thread: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/posts")
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "update",
    possession: "any",
  })
  async connectPosts(
    @common.Param() params: ThreadWhereUniqueInput,
    @common.Body() body: PostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      posts: {
        connect: body,
      },
    };
    await this.service.updateThread({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/posts")
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "update",
    possession: "any",
  })
  async updatePosts(
    @common.Param() params: ThreadWhereUniqueInput,
    @common.Body() body: PostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      posts: {
        set: body,
      },
    };
    await this.service.updateThread({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/posts")
  @nestAccessControl.UseRoles({
    resource: "Thread",
    action: "update",
    possession: "any",
  })
  async disconnectPosts(
    @common.Param() params: ThreadWhereUniqueInput,
    @common.Body() body: PostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      posts: {
        disconnect: body,
      },
    };
    await this.service.updateThread({
      where: params,
      data,
      select: { id: true },
    });
  }
}
