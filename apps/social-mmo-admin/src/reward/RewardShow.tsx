import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { REWARD_TITLE_FIELD } from "./RewardTitle";

export const RewardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="value" source="value" />
        <TextField label="name" source="name" />
        <TextField label="type" source="typeField" />
        <ReferenceManyField reference="Quest" target="rewardId" label="Quests">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="title" source="title" />
            <TextField label="description" source="description" />
            <TextField label="reputationRequired" source="reputationRequired" />
            <ReferenceField
              label="reward"
              source="reward.id"
              reference="Reward"
            >
              <TextField source={REWARD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <TextField label="questName" source="questName" />
            <TextField label="questDescription" source="questDescription" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
