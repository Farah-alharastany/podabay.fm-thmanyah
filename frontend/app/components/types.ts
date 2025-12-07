export interface Product {
  id: number;
  title: string;
  artist?: string;
  collectionName?: string;
  ranking?: number;
  image?: string;
  hrefLink?: string;
  description?: string;
  releaseDate?: string;
  duration?: string;
  date?: string;
}

export interface DropdownItem {
  label: string;
  hasDivider?: boolean;
  action?: () => void;
  href?: string;
}
export interface ProductsContainerProps {
  title: string;
  description?: string;
  products: Product[];
  containerType?: containerType;
  goToLink?: string;
  goToLabel?: string;
  availableViews?: ViewType[];
  customDropdownItems?: DropdownItem[];
  cardDropdownItems?: DropdownItem[];
  cardTypeToShow?: ProductCardType;
}
export interface ProductsListProps {
  products: Product[];
  view: ViewType;
  cardType?: ProductCardType;
  dropdownItems?: DropdownItem[];
  containerType?: containerType;
}
export interface ProductCardProps extends Product {
  cardType?: ProductCardType;
  onClick?: () => void;
  dropdownItems?: DropdownItem[];
  showDropdown?: boolean;
  containerType?: containerType;
}
export type ViewType = "list" | "grid" | "compact" | "scroll";
export type ProductCardType =
  | "standard"
  | "image-only"
  | "button"
  | "compact"
  | "list"
  | "grid";
export type containerType = "podcasts-container" | "episodes-container";
