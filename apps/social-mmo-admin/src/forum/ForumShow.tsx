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

import { FORUM_TITLE_FIELD } from "./ForumTitle";

export const ForumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="Owner" source="owner" />
        <TextField label="title" source="title" />
        <TextField label="forumTitle" source="forumTitle" />
        <TextField label="forumDescription" source="forumDescription" />
        <ReferenceManyField reference="Thread" target="forumId" label="Threads">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="content" source="content" />
            <TextField label="title" source="title" />
            <ReferenceField label="Forum" source="forum.id" reference="Forum">
              <TextField source={FORUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Creator" source="creator" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
