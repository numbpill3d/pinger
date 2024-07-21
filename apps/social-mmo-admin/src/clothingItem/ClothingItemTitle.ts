import { ClothingItem as TClothingItem } from "../api/clothingItem/ClothingItem";

export const CLOTHINGITEM_TITLE_FIELD = "name";

export const ClothingItemTitle = (record: TClothingItem): string => {
  return record.name?.toString() || String(record.id);
};
