import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
