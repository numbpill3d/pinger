import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="eventTitle" source="eventTitle" />
        <TextInput
          label="eventDescription"
          multiline
          source="eventDescription"
        />
        <DateTimeInput label="eventDate" source="eventDate" />
      </SimpleForm>
    </Create>
  );
};
