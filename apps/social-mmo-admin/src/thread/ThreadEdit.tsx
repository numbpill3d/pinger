import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ForumTitle } from "../forum/ForumTitle";
import { PostTitle } from "../post/PostTitle";

export const ThreadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="forum.id" reference="Forum" label="Forum">
          <SelectInput optionText={ForumTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="posts"
          reference="Post"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PostTitle} />
        </ReferenceArrayInput>
        <TextInput label="Creator" source="creator" />
      </SimpleForm>
    </Edit>
  );
};
