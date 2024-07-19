/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QuestWhereUniqueInput } from "../../quest/base/QuestWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QuestUpdateManyWithoutRewardsInput {
  @Field(() => [QuestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestWhereUniqueInput],
  })
  connect?: Array<QuestWhereUniqueInput>;

  @Field(() => [QuestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestWhereUniqueInput],
  })
  disconnect?: Array<QuestWhereUniqueInput>;

  @Field(() => [QuestWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QuestWhereUniqueInput],
  })
  set?: Array<QuestWhereUniqueInput>;
}

export { QuestUpdateManyWithoutRewardsInput as QuestUpdateManyWithoutRewardsInput };
