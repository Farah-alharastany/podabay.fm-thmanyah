import Sidebar from "./components/Sidebar/SidebarContainer";
import ProductsContainer from "./components/Products/ProductsContainer";
import type { DropdownItem, Product } from "./components/types";
import HeaderContainer from "./components/Header/HeaderContainer";
import firstContainerData from "./data/first-container-data.json";
import secondContainerData from "./data/second-container-data.json";
import thirdContainerData from "./data/third-container-data.json";
import fourthContainerData from "./data/fourth-container-data.json";
import Head from "next/head";

export default function Home() {
  // Custom dropdown items for the fourth container
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
      <Head>
        <title>New Page Title</title>
      </Head>

      {/* Sidebar navigation */}
      <Sidebar />

      {/* Main content area */}
      <div className="content lg:w-[83%] lg:ml-[16.8%] w-full ml-0 pt-16">
        {/* Header with search and user actions */}
        <HeaderContainer />

        {/* Container 1: Trending podcasts */}
        <ProductsContainer
          title="Trending podcasts in all genre"
          description="The most popular podcasts overall now. Last updated an hour ago."
          products={firstContainerData}
          containerType="podcasts-container"
          goToLink="/trending"
          goToLabel="Go to Trending Podcasts"
          cardTypeToShow="standard"
        />

        {/* Container 2: Browse podcasts by genre */}
        <ProductsContainer
          title="Browse by genre"
          description="The most popular podcasts and episodes now categorized by genre. Last updated an hour ago."
          products={secondContainerData}
          containerType="podcasts-container"
          goToLink="/recommended"
          goToLabel="Go to browse by genre"
          cardTypeToShow="image-only"
        />

        {/* Container 3: Promoted podcasts */}
        <ProductsContainer
          title="Promoted Podcasts"
          description="These podcasts are promoted by podcasters, listeners, and the Podbay team."
          products={thirdContainerData}
          containerType="podcasts-container"
          goToLink="/new-releases"
          goToLabel="Browse New Releases"
          cardTypeToShow="button"
        />

        {/* Container 4: Trending episodes */}
        <ProductsContainer
          title="Trending episodes in all genres"
          description="The most popular podcast episodes overall now. Last updated an hour ago."
          products={fourthContainerData}
          containerType="episodes-container"
          availableViews={["grid", "scroll", "list", "compact"]}
          cardTypeToShow="grid"
          goToLink="/"
          goToLabel="Go to Trending episodes in.."
          cardDropdownItems={fourthContainerCustomDropdown}
        />
      </div>
    </div>
  );
}
