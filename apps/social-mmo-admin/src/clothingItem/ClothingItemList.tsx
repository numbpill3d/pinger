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
import { AVATAR_TITLE_FIELD } from "../avatar/AvatarTitle";

export const ClothingItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ClothingItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="type" source="typeField" />
        <TextField label="rarity" source="rarity" />
        <ReferenceField label="Avatar" source="avatar.id" reference="Avatar">
          <TextField source={AVATAR_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
