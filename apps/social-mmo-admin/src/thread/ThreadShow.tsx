import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { THREAD_TITLE_FIELD } from "./ThreadTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { FORUM_TITLE_FIELD } from "../forum/ForumTitle";

export const ThreadShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="content" source="content" />
        <TextField label="title" source="title" />
        <ReferenceField label="Forum" source="forum.id" reference="Forum">
          <TextField source={FORUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Creator" source="creator" />
        <ReferenceManyField reference="Post" target="threadId" label="Posts">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="content" source="content" />
            <ReferenceField
              label="Thread"
              source="thread.id"
              reference="Thread"
            >
              <TextField source={THREAD_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
