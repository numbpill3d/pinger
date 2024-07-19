import { ClothingItem as TClothingItem } from "../api/clothingItem/ClothingItem";

export const CLOTHINGITEM_TITLE_FIELD = "id";

export const ClothingItemTitle = (record: TClothingItem): string => {
  return record.id?.toString() || String(record.id);
};
