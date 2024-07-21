import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EventWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  eventTitle?: StringNullableFilter;
  eventDescription?: StringNullableFilter;
  eventDate?: DateTimeNullableFilter;
};
