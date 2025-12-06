"use client";

import React, { forwardRef } from "react";
import ProductCard from "./ProductCard";
import type {
  DropdownItem,
  Product,
  ProductCardType,
  ViewType,
} from "../types";

interface ProductsListProps {
  products: Product[];
  view: ViewType;
  cardType?: ProductCardType;
  dropdownItems?: DropdownItem[];
}

const ProductsList = forwardRef<HTMLDivElement, ProductsListProps>(
  ({ products, view, cardType = "standard", dropdownItems }, ref) => {

    const baseClass =
      "products-list py-5 overflow-x-auto scrollbar-thin scrollbar-thumb-[#7a7af0] scrollbar-track-transparent";

    const getViewClass = () => {
      switch (view) {
        case "list":
          return "flex flex-col";
        case "grid":
          return "grid grid-cols-2 mx-4 md:grid-cols-3 lg:grid-cols-6 !gap-4";
        case "compact":
          return "grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-4 gap-4";
        case "scroll":
          return "flex gap-4  mx-4 overflow-x-auto snap-x snap-mandatory";
        default:
          return "flex gap-4 mx-4";
      }
    };

    const viewClass = getViewClass();

    return (
      <div ref={ref} className={`${baseClass} ${viewClass}`}>
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
            dropdownItems={dropdownItems}
          />
        ))}
      </div>
    );
  }
);

ProductsList.displayName = "ProductsList";
export default ProductsList;
