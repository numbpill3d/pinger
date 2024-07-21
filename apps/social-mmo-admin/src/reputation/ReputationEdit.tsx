import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ReputationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="value" source="value" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="points" source="points" />
        <NumberInput
          step={1}
          label="reputationPoints"
          source="reputationPoints"
        />
        <TextInput label="reputationUser" source="reputationUser" />
      </SimpleForm>
    </Edit>
  );
};
