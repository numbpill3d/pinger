/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { ReputationUpdateManyWithoutUsersInput } from "./ReputationUpdateManyWithoutUsersInput";
import { AvatarUpdateManyWithoutUsersInput } from "./AvatarUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => PostUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PostUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PostUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  posts?: PostUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ReputationUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ReputationUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ReputationUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  reputations?: ReputationUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => AvatarUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AvatarUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AvatarUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  avatars?: AvatarUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };
