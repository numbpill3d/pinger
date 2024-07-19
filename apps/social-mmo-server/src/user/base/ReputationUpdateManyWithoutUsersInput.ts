/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ReputationWhereUniqueInput } from "../../reputation/base/ReputationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ReputationUpdateManyWithoutUsersInput {
  @Field(() => [ReputationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReputationWhereUniqueInput],
  })
  connect?: Array<ReputationWhereUniqueInput>;

  @Field(() => [ReputationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReputationWhereUniqueInput],
  })
  disconnect?: Array<ReputationWhereUniqueInput>;

  @Field(() => [ReputationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReputationWhereUniqueInput],
  })
  set?: Array<ReputationWhereUniqueInput>;
}

export { ReputationUpdateManyWithoutUsersInput as ReputationUpdateManyWithoutUsersInput };
