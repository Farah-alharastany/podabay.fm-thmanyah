import Image from "next/image";
import Link from "next/link";
import Dropdown from "../Buttons/Dropdown";
import type { Product, ProductCardType, DropdownItem } from "../types";
import styles from "./ProductCard.module.css";
import { describe } from "node:test";

interface ProductCardProps extends Product {
  cardType?: ProductCardType;
  onClick?: () => void;
  dropdownItems?: DropdownItem[];
  showDropdown?: boolean;
}

const DYNAMIC_COLORS = [
  "#FF6B8B", // وردي
  "#4ECDC4", // تركواز
  "#FFD166", // أصفر
  "#06D6A0", // أخضر
  "#118AB2", // أزرق
  "#EF476F", // وردي فاتح
  "#7209B7", // بنفسجي
  "#F3722C", // برتقالي
  "#577590", // أزرق رمادي
  "#90BE6D", // أخضر فاتح
  "#F94144", // أحمر
  "#43AA8B", // أخضر مزرق
  "#F8961E", // برتقالي غامق
  "#5778A8", // أزرق متوسط
  "#277DA1", // أزرق محيطي
];

const getArtistColor = (id: number): string => {
  const colorIndex = id % DYNAMIC_COLORS.length;
  return DYNAMIC_COLORS[colorIndex];
};

const getColorFromText = (text: string): string => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % DYNAMIC_COLORS.length;
  return DYNAMIC_COLORS[index];
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  artist,
  collectionName,
  ranking,
  image,
  date,
  duration,
  description,
  hrefLink = "#",
  cardType = "standard",
  onClick,
  dropdownItems,
  showDropdown = true,
}) => {
  const imageUrl = image || "/images/default-podcast.jpg";

  const artistColor = getArtistColor(id);

  const defaultDropdownItems: DropdownItem[] = [
    { label: "Add to My Podcasts", hasDivider: true },
    { label: "Go to Podcasts", hasDivider: true },
    { label: "Share podcast", hasDivider: true },
    { label: "Hide podcast" },
  ];

  const itemsToUse = dropdownItems || defaultDropdownItems;

  if (cardType === "image-only") {
    return (
      <Link
        href={hrefLink}
        className="relative group cursor-pointer flex-shrink-0"
      >
        <Image
          src={imageUrl}
          alt={title}
          width={210}
          height={100}
          className="rounded-sm object-cover"
        />

        <div className="absolute top-3 left-0 right-0">
          <h3
            className="text-white text-center text-sm font-medium  
                       px-2 py-1 rounded mx-2 group-hover:underline line-clamp-1"
          >
            {title}
          </h3>
        </div>
      </Link>
    );
  }

  if (cardType === "button") {
    return (
      <div className="relative w-36 h-36 flex-shrink-0">
        <Link
          href={hrefLink}
          className="absolute inset-0 w-full h-full p-4 rounded-md 
                  bg-black/20 hover:bg-black/30 transition-all 
                  text-gray-400 font-light shadow-lg hover:shadow-xl
                  flex items-center justify-center text-center text-xs line-clamp-1"
        >
          {title}
        </Link>
      </div>
    );
  }

  if (cardType === "compact") {
    return (
      <div
        className={`${styles.compactCard} flex items-start gap-3 !rounded-md`}
      >
        {/* صورة صغيرة */}
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-bl-md rounded-tl-md"
            sizes="(max-width: 96px) 100vw, 96px"
          />
        </div>
        <div className="content flex justify-between w-full p-2">
          <div className="flex flex-col max-w-full">
            <span
              className="text-xs font-medium line-clamp-1"
              style={{ color: artistColor }}
            >
              {artist || collectionName || "Unknown"}
            </span>
            <p className="text-white text-sm font-medium line-clamp-2">
              {title}
            </p>
            <div className="details flex items-center justify-start gap-3 font-semibold text-xs text-gray-200 mt-7">
              {ranking && <span>#{ranking}</span>}
              {date && <span>{date}</span>}{" "}
              {duration && <span>{duration}</span>}
            </div>
          </div>

          {/* الدروب داون للكومباكت */}
          {showDropdown && (
            <div>
              <Dropdown items={itemsToUse} fillColor={"#6A7282"} />
            </div>
          )}
        </div>
      </div>
    );
  }

  if (cardType === "list") {
    return (
      <div className="group flex items-center gap-3 hover:bg-black/20 px-4 cursor-pointer">
        <div className="relative w-24 h-24 flex-shrink-0 p-2">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-sm group-hover:brightness-50 transition duration-200"
            sizes="(max-width: 96px) 100vw, 96px"
          />

          <div className="absolute inset-0 py-3 items-center justify-center hidden group-hover:flex">
            <svg
              width="28"
              height="28"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.94687 5.03128L1.69688 0.153936C1.02656 -0.242158 0 0.142218 0 1.1219V10.8742C0 11.7532 0.953906 12.2828 1.69688 11.8422L9.94687 6.96722C10.6828 6.53362 10.6852 5.46487 9.94687 5.03128Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="content flex justify-between w-full h-[120px] py-2 border-b border-b-gray-700">
          <div className="flex flex-col">
            <p className="text-white text-sm font-medium line-clamp-1 hover:underline cursor-pointer">
              {title}
            </p>
            <span
              className="text-xs font-medium line-clamp-1 mt-3"
              style={{ color: artistColor }}
            >
              {artist || collectionName || "Unknown"}
            </span>
            <div className="text-xs text-gray-200 mt-1 lg:block hidden">
              {description && (
                <span className="line-clamp-2">{description}</span>
              )}
            </div>
            <div className="details flex items-center justify-start gap-3 font-semibold text-xs text-gray-200 mt-3">
              {ranking && <span>#{ranking}</span>}
              {date && <span>{date}</span>}{" "}
              {duration && <span>{duration}</span>}
            </div>
          </div>

          {showDropdown && (
            <div className="flex flex-col items-center justify-center gap-4">
              <Image src="/icons/play.svg" alt="Play" width={16} height={16} />
              <Dropdown items={itemsToUse} fillColor={"#6A7282"} />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={hrefLink}
      className="card-container flex-shrink-0 w-[190px] rounded-sm snap-start"
    >
      <div className="relative w-full aspect-square mb-3">
        <Image
          src={imageUrl}
          alt={title}
          width={190}
          height={190}
          className="rounded-sm object-cover"
          sizes="(max-width: 190px) 100vw, 190px"
        />
      </div>

      <div className="ps-2">
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            {ranking && (
              <span className="text-gray-500 text-sm">#{ranking}</span>
            )}
            <div className="info min-w-0">
              <div className="text-white font-medium hover:underline text-sm line-clamp-1">
                {title}
              </div>
              <span
                className="text-xs font-medium line-clamp-1"
                style={{ color: artistColor }}
              >
                {artist || collectionName || "Unknown"}
              </span>
            </div>
          </div>

          {showDropdown && (
            <div>
              <Dropdown items={itemsToUse} fillColor={"#6A7282"} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
