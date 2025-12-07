// Product interface represents a single podcast or episode
export interface Product {
  id: number;
  title: string;
  artist?: string; // Artist or creator
  collectionName?: string; // Collection or album name
  ranking?: number; // Optional ranking or position
  image?: string; // URL of the image
  hrefLink?: string; // Link to the product page
  description?: string; // Short description
  duration?: string; // Duration of the episode
  date?: string; // Release date
}

// Dropdown item interface for menus or card actions
export interface DropdownItem {
  label: string; // Text to display
  hasDivider?: boolean; // Whether a divider should appear after this item
  action?: () => void; // Callback function
  href?: string; // Optional link
}

// Props for a container of multiple products
export interface ProductsContainerProps {
  title: string; // Container title
  description?: string; // Optional description
  products: Product[]; // List of products to display
  containerType?: containerType; // Type of container (podcasts or episodes)
  goToLink?: string; // Optional link for "See All"
  goToLabel?: string; // Label for the link
  availableViews?: ViewType[]; // Allowed views (grid, list, scroll, compact)
  customDropdownItems?: DropdownItem[]; // Custom dropdown items for the container
  cardDropdownItems?: DropdownItem[]; // Dropdown items for individual cards
  cardTypeToShow?: ProductCardType; // Default card type
}

// Props for the list of products inside a container
export interface ProductsListProps {
  products: Product[];
  view: ViewType; // Current view type
  cardType?: ProductCardType; // Card type to render
  dropdownItems?: DropdownItem[]; // Optional dropdown items for cards
  containerType?: containerType; // Type of container
}

// Props for a single product card
export interface ProductCardProps extends Product {
  cardType?: ProductCardType; // Card style
  onClick?: () => void; // Optional click handler
  dropdownItems?: DropdownItem[]; // Dropdown menu items
  showDropdown?: boolean; // Whether to show dropdown
  containerType?: containerType; // Container type
}

// Allowed view types for product lists
export type ViewType = "list" | "grid" | "compact" | "scroll";

// Allowed card types
export type ProductCardType =
  | "standard"
  | "image-only"
  | "button"
  | "compact"
  | "list"
  | "grid";

// Container types
export type containerType = "podcasts-container" | "episodes-container";
