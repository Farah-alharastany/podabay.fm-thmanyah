"use client";

import Sidebar from "./components/Sidebar/Sidebar";
import ProductsContainer from "./components/Products/ProductsContainer";
import type { DropdownItem, Product } from "./components/types";
import HeaderContainer from "./components/Header/HeaderContainer";
import firstContainerData from "./data/first-container-data.json";
import fourthContainerData from "./data/fourth-container-data.json";
export default function Home() {
  const productsData: Product[] = [
    {
      id: 1,
      title: "Podcast One",
      artist: "artist A",
      ranking: 1,
      image: "/images/product.png",
    },
    {
      id: 2,
      title: "Podcast Two",
      artist: "artist B",
      ranking: 2,
      image: "/images/product.png",
    },
    {
      id: 3,
      title: "Podcast Three",
      artist: "artist C",
      ranking: 3,
      image: "/images/product.png",
    },
    {
      id: 4,
      title: "Podcast Four",
      artist: "artist D",
      ranking: 4,
      image: "/images/product.png",
    },
    {
      id: 5,
      title: "Podcast Five",
      artist: "artist E",
      ranking: 5,
      image: "/images/product.png",
    },
    {
      id: 6,
      title: "Podcast Six",
      artist: "artist F",
      ranking: 6,
      image: "/images/product.png",
    },
    {
      id: 7,
      title: "Podcast Seven",
      artist: "artist G",
      ranking: 7,
      image: "/images/product.png",
    },
    {
      id: 8,
      title: "Podcast Eight",
      artist: "artist H",
      ranking: 8,
      image: "/images/product.png",
    },
    {
      id: 9,
      title: "Podcast Nine",
      artist: "artist I",
      ranking: 9,
      image: "/images/product.png",
    },
    {
      id: 10,
      title: "Podcast Ten",
      artist: "artist J",
      ranking: 10,
      image: "/images/product.png",
    },
  ];
  const secondContainerData: Product[] = [
    {
      id: 1,
      title: "All genres",
      hrefLink: "/",
      image: "/images/all-genres-1.png",
    },
    {
      id: 2,
      title: "Arts",
      hrefLink: "/",
      image: "/images/genre-2.png",
    },
    {
      id: 3,
      title: "Comedy",
      hrefLink: "/",
      image: "/images/genre-3.png",
    },
    {
      id: 4,
      title: "Education",
      hrefLink: "/",
      image: "/images/genre-4.png",
    },
    {
      id: 5,
      title: "Kids & Family",
      hrefLink: "/",
      image: "/images/genre-5.png",
    },
    {
      id: 6,
      title: "TV & Film",
      hrefLink: "/",
      image: "/images/genre-6.png",
    },
    {
      id: 7,
      title: "Music",
      hrefLink: "/",
      image: "/images/all-genres-1.png",
    },
    {
      id: 8,
      title: "Religion and Spirituality",
      hrefLink: "/",
      image: "/images/genre-5.png",
    },
    {
      id: 9,
      title: "Technology",
      hrefLink: "/",
      image: "/images/genre-4.png",
    },
    {
      id: 10,
      title: "Busiens",
      hrefLink: "/",
      image: "/images/genre-3.png",
    },
    {
      id: 11,
      title: "TV & Film",
      hrefLink: "/",
      image: "/images/genre-2.png",
    },
    {
      id: 12,
      title: "Music",
      hrefLink: "/",
      image: "/images/all-genres-1.png",
    },
  ];
  const thidrContainerData: Product[] = [
    {
      id: 1,
      title: "Your Podcast Here",
      hrefLink: "/",
    },
    {
      id: 2,
      title: "Your Podcast Here",
      hrefLink: "/",
    },
    {
      id: 3,
      title: "Your Podcast Here",
      hrefLink: "/",
    },
    {
      id: 4,
      title: "Your Podcast Here",
      hrefLink: "/",
    },
    {
      id: 5,
      title: "Your Podcast Here",
      hrefLink: "/",
    },
    {
      id: 6,
      title: "Your Podcast Here",
      hrefLink: "/",
    },
    {
      id: 7,
      title: "Your Podcast Here",
      hrefLink: "/",
    },
    {
      id: 8,
      title: "Your Podcast Here",
      hrefLink: "/",
    },
  ];
  const fourthContainerCustomDropdown: DropdownItem[] = [
    { label: "Play episode" },
    { label: "Add to my queue", hasDivider: true },
    { label: "Go to episode" },
    { label: "Go to podcast", hasDivider: true },
    { label: "Download file", hasDivider: true },
    { label: "Hide podcast" },
  ];
  return (
    <div className="flex items-start">
      <Sidebar />
      <div className="content lg:w-[83%] lg:ml-[16.8%] w-full ml-0 pt-16">
        <HeaderContainer />
        {/* Container 1 */}
        <ProductsContainer
          title="Trending podcasts in all genre"
          description="The most popular podcasts overall  now. Last updated an hour ago."
          products={firstContainerData}
          containerType="standard"
          goToLink="/trending"
          goToLabel="Go to Trending Podcasts"
          cardTypeToShow="standard"
        />

        {/* Container 2 */}
        <ProductsContainer
          title="Browse by genre"
          description="The most popular podcasts and episodes now categorized by genre. Last updated an hour ago."
          products={secondContainerData}
          containerType="standard"
          goToLink="/recommended"
          goToLabel="Go to browse by genre"
          cardTypeToShow="image-only"
        />

        {/* Container 3 */}
        <ProductsContainer
          title="Promoted Podcasts"
          description="These podcasts are promoted by podcasters, listeners, and the Podbay team."
          products={thidrContainerData}
          containerType="standard"
          goToLink="/new-releases"
          goToLabel="Browse New Releases"
          cardTypeToShow="button"
        />

        {/* Container 4 */}
        <ProductsContainer
          title="Trending episodes in all genres"
          description="The most popular podcast episodes overall  now. Last updated an hour ago."
          products={fourthContainerData}
          containerType="special"
          availableViews={["grid", "scroll", "list", "compact"]}
          cardTypeToShow="grid"
          cardDropdownItems={fourthContainerCustomDropdown}
        />
      </div>
    </div>
  );
}
