import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RewardTitle } from "../reward/RewardTitle";

export const QuestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
      </SimpleForm>
    </Create>
  );
};
