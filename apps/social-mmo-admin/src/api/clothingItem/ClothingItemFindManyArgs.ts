import { ClothingItemWhereInput } from "./ClothingItemWhereInput";
import { ClothingItemOrderByInput } from "./ClothingItemOrderByInput";

export type ClothingItemFindManyArgs = {
  where?: ClothingItemWhereInput;
  orderBy?: Array<ClothingItemOrderByInput>;
  skip?: number;
  take?: number;
};
