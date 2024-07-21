import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="date" source="date" />
        <TextField label="eventTitle" source="eventTitle" />
        <TextField label="eventDescription" source="eventDescription" />
        <TextField label="eventDate" source="eventDate" />
      </SimpleShowLayout>
    </Show>
  );
};
