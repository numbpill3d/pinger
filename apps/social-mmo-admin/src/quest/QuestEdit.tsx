import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RewardTitle } from "../reward/RewardTitle";

export const QuestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <NumberInput
          step={1}
          label="reputationRequired"
          source="reputationRequired"
        />
        <ReferenceInput source="reward.id" reference="Reward" label="reward">
          <SelectInput optionText={RewardTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="questName" source="questName" />
        <TextInput
          label="questDescription"
          multiline
          source="questDescription"
        />
      </SimpleForm>
    </Edit>
  );
};
