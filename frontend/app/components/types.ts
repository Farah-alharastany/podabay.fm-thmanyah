export interface Product {
  id: number;
  title: string;
  artist?: string;
  collectionName?:string;
  ranking?: number;
  image?: string;
  hrefLink?: string;
  description?: string;
  releaseDate?:string;
  duration?:string;
  date?:string
}

export interface DropdownItem {
  label: string;
  hasDivider?: boolean;
  action?: () => void;
  href?: string;
}

export type ViewType = "list" | "grid" | "compact" | "scroll";
export type ProductCardType =
  | "standard"
  | "image-only"
  | "button"
  | "compact"
  | "list";
