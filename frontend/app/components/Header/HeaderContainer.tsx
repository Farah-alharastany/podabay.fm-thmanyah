import React from "react";
import Searchbar from "./Searchbar";
import NavigationArrows from "../Buttons/NavigationArrows";
import Button from "../Buttons/Button";
import Dropdown from "../Buttons/Dropdown";
import Image from "next/image";

interface HeaderContainerProps {
  searchTerm?: string;
  onSearch?: (term: string) => void;
}

const HeaderContainer: React.FC<HeaderContainerProps> = ({ searchTerm = "", onSearch }) => {
  return (
    <div className="header fixed top-0 bg-[#161727fa] !z-10 lg:w-[83%] w-full flex gap-2 justify-between items-center  lg:px-1 px-3 py-3 lg:!py-2 mt-0">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width="45"
        height="50"
        className="lg:hidden block"
      />
      <NavigationArrows type="history" />
      <div className="lg:w-9/12 md:w-8/12 w-full">

        <Searchbar initialTerm={searchTerm} onSearch={onSearch} />
      </div>
      <div className="flex gap-1">
        <div className="lg:flex gap-1 hidden">
          <Button>Login</Button>
          <Button>Sign up</Button>
        </div>
        <Dropdown
          items={[
            { label: "Settings", href: "/settings", hasDivider: true },
            { label: "About Podabay", href: "/about-podabay" },
            { label: "What's News", href: "/whats-news" },
            { label: "Podcaster FAQ", href: "/podcaster-faq" },
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms", hasDivider: true },
            { label: "Contact & Feedback", href: "/contact-feedback" },
            { label: "Clear Data..", href: "/clear-data" },
          ]}
          fillColor={'white'}
        />
      </div>
    </div>
  );
};

export default HeaderContainer;