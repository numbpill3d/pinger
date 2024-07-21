import { ClothingItem } from "../clothingItem/ClothingItem";
import { User } from "../user/User";

export type Avatar = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  avatarUrl: string | null;
  clothingItems?: Array<ClothingItem>;
  user?: User | null;
};
