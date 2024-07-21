import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { REWARD_TITLE_FIELD } from "../reward/RewardTitle";

export const QuestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Quests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="reputationRequired" source="reputationRequired" />
        <ReferenceField label="reward" source="reward.id" reference="Reward">
          <TextField source={REWARD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <TextField label="questName" source="questName" />
        <TextField label="questDescription" source="questDescription" />
      </Datagrid>
    </List>
  );
};
