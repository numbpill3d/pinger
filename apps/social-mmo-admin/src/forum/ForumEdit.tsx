import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ThreadTitle } from "../thread/ThreadTitle";

export const ForumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="threads"
          reference="Thread"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ThreadTitle} />
        </ReferenceArrayInput>
        <TextInput label="Owner" source="owner" />
        <TextInput label="title" source="title" />
        <TextInput label="forumTitle" source="forumTitle" />
        <TextInput
          label="forumDescription"
          multiline
          source="forumDescription"
        />
      </SimpleForm>
    </Edit>
  );
};
