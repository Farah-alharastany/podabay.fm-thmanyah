import React, { forwardRef } from "react";
import ProductCard from "./ProductCard";
import type {
  DropdownItem,
  Product,
  ProductCardType,
  ViewType,
  ProductsListProps,
} from "../types";

const ProductsList = forwardRef<HTMLDivElement, ProductsListProps>(
  (
    {
      products,
      view,
      cardType = "standard",
      dropdownItems,
      containerType = "podcasts-container",
    },
    ref
  ) => {
    // Function to get CSS classes based on current view and container type
    const getContainerClasses = () => {
      const baseClass =
        "products-list py-5 overflow-x-auto scrollbar-thin scrollbar-thumb-[#7a7af0] scrollbar-track-transparent";

      switch (view) {
        case "list":
          return `${baseClass} flex flex-col`;

        case "grid":
          if (containerType === "episodes-container") {
            return `${baseClass} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mx-4 gap-4 episodes-container-grid`;
          } else if (containerType === "podcasts-container") {
            return `${baseClass} grid grid-cols-2 mx-4 md:grid-cols-3 lg:grid-cols-6 gap-4 standard-grid`;
          }

        case "compact":
          if (containerType === "episodes-container") {
            return `${baseClass} grid grid-cols-1 !py-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 episodes-container-compact`;
          } else
            return `${baseClass} grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-4 gap-4 standard-compact`;

        case "scroll":
          return `${baseClass} flex gap-4 mx-4 overflow-x-auto snap-x snap-mandatory scroll-container`;

        default:
          return `${baseClass} flex gap-4 mx-4`;
      }
    };

    const containerClasses = getContainerClasses();

    return (
      // Container for all product cards
      <div
        ref={ref}
        className={containerClasses}
        data-view={view}
        data-container-type={containerType}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            collectionName={product.collectionName}
            artist={product.artist}
            ranking={product.ranking}
            date={product.date}
            duration={product.duration}
            description={product.description}
            image={product.image}
            hrefLink={product.hrefLink}
            cardType={cardType}
            containerType={containerType}
            dropdownItems={dropdownItems}
          />
        ))}
      </div>
    );
  }
);

ProductsList.displayName = "ProductsList";
export default ProductsList;
