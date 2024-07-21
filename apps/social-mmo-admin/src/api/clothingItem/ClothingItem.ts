import { Avatar } from "../avatar/Avatar";

export type ClothingItem = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  typeField?: "Option1" | null;
  rarity?: "Option1" | null;
  avatar?: Avatar | null;
};
