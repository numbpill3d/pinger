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
import { FORUM_TITLE_FIELD } from "../forum/ForumTitle";

export const ThreadList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Threads"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
