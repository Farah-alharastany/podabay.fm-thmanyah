"use client";
import React, { useRef, useState, useMemo } from "react";
import Link from "next/link";
import NavigationArrows from "../Buttons/NavigationArrows";
import Dropdown from "../Buttons/Dropdown";
import ProductsList from "./ProductsList";
import type {
  DropdownItem,
  ViewType,
  Product,
  ProductCardType,
} from "../types";

interface ProductsContainerProps {
  title: string;
  description?: string;
  products: Product[];
  containerType?: "standard" | "special";
  goToLink?: string;
  goToLabel?: string;
  availableViews?: ViewType[];
  customDropdownItems?: DropdownItem[];
  cardDropdownItems?: DropdownItem[];
  cardTypeToShow?: ProductCardType;
}

const ProductsContainer: React.FC<ProductsContainerProps> = ({
  title,
  description,
  products,
  containerType = "standard",
  goToLink = "/trending",
  goToLabel = "Go to Trending Podcasts",
  availableViews = containerType === "special"
    ? ["grid", "scroll", "list", "compact"]
    : ["scroll", "grid"],
  customDropdownItems,
  cardDropdownItems,
  cardTypeToShow = "standard",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentView, setCurrentView] = useState<ViewType>(availableViews[0]);
  const [dropdownKey, setDropdownKey] = useState(0);

  const getCardTypeForView = (view: ViewType): ProductCardType => {
    if (view === "compact") {
      return "compact";
    } else if (view === "list") {
      return "list";
    }

    return cardTypeToShow;
  };

  const currentCardType = getCardTypeForView(currentView);

  const dropdownItems = useMemo(() => {
    if (customDropdownItems) {
      return customDropdownItems;
    }

    const items: DropdownItem[] = [];

    if (containerType === "standard") {
      if (
        availableViews.includes("scroll") &&
        availableViews.includes("grid")
      ) {
        items.push({
          label:
            currentView === "scroll"
              ? "Switch to Grid View"
              : "Switch to Scroll View",
          action: () => {
            const newView = currentView === "scroll" ? "grid" : "scroll";
            console.log(`🚀 Changing view to: ${newView}`);
            setCurrentView(newView);
            setDropdownKey((prev) => prev + 1);
          },
          hasDivider: true,
        });
      }

      items.push({
        label: goToLabel,
        href: goToLink,
      });
    } else if (containerType === "special") {
      if (
        availableViews.includes("grid") &&
        availableViews.includes("scroll")
      ) {
        items.push({
          label:
            currentView === "grid"
              ? "Switch to Scroll View"
              : "Switch to Grid View",
          action: () => {
            const newView = currentView === "grid" ? "scroll" : "grid";
            console.log(`🚀 Changing view to: ${newView}`);
            setCurrentView(newView);
            setDropdownKey((prev) => prev + 1);
          },
        });
      }

      items.push({
        label: "List View",
        action: () => {
          console.log(`🚀 ${title} - Switching to LIST view`);
          setCurrentView("list");
          setDropdownKey((prev) => prev + 1);
        },
      });

      items.push({
        label: "Compact View",
        action: () => {
          console.log(`🚀 ${title} - Switching to COMPACT view`);
          setCurrentView("compact");
          setDropdownKey((prev) => prev + 1);
        },
        hasDivider: true,
      });

      items.push({
        label: goToLabel,
        href: goToLink,
      });
    }

    return items;
  }, [
    currentView,
    containerType,
    availableViews,
    goToLink,
    goToLabel,
    customDropdownItems,
    title,
  ]);

  return (
    <div className="w-full mt-7">
      <div className="flex ps-4 pe-2 items-center justify-between border-b border-b-gray-700 w-full">
        <div className="top-section py-3">
          <Link href="/" className="text-white font-semibold hover:underline">
            {title}
          </Link>
          {description && (
            <p className="description text-sm font-semiboold text-gray-500">
              {description}
            </p>
          )}
        </div>

        <div className="buttons flex items-center justify-between gap-2">
          <NavigationArrows
            type="scroll"
            scrollRef={scrollRef}
            scrollAmount={250}
          />
          <Dropdown
            key={dropdownKey}
            items={dropdownItems}
            fillColor={"white"}
          />
        </div>
      </div>

      <ProductsList
        products={products}
        view={currentView}
        ref={scrollRef}
        cardType={currentCardType}
        dropdownItems={cardDropdownItems}
      />
    </div>
  );
};

export default ProductsContainer;
