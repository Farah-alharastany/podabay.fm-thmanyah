"use client";
import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import Link from "next/link";

interface MenuItem {
  name: string;
  path?: string;
  icon?: string;
  activeIcon?: string;
  gradientClass?: string;
  children?: MenuItem[];
}

// Sidebar menu configuration
const menuItems: MenuItem[] = [
  {
    name: "Home",
    path: "/",
    icon: "/icons/home.svg",
    activeIcon: "/icons/home-active.svg",
    gradientClass: "home-gradient",
  },
  {
    name: "Discover",
    path: "/discover",
    icon: "/icons/discover.svg",
    activeIcon: "/icons/discover-active.svg",
    gradientClass: "discover-gradient",
  },
  {
    name: "YOUR STUFF",
    children: [
      {
        name: "My Queue",
        path: "/my-queue",
        icon: "/icons/my-queue.svg",
        activeIcon: "/icons/my-queue-active.svg",
        gradientClass: "my-queue-gradient",
      },
      {
        name: "My Podcasts",
        path: "/my-podcasts",
        icon: "/icons/my-podcasts.svg",
        activeIcon: "/icons/my-podcasts-active.svg",
        gradientClass: "my-podcasts-gradient",
      },
      {
        name: "Recents",
        path: "/recents",
        icon: "/icons/recents.svg",
        activeIcon: "/icons/recents-active.svg",
        gradientClass: "recents-gradient",
      },
    ],
  },
];

const Sidebar: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Navigate to a given path
  const handleNavigation = (path?: string) => {
    if (path) router.push(path);
  };

  return (
    <div
      className={`${styles.menuContainer} fixed left-0 top-0 w-2/12 min-h-screen p-4 flex-col lg:flex hidden`}
    >
      {/* Logo */}
      <Image src="/images/logo.svg" alt="Logo" width="45" height="50"></Image>

      {/* Menu items */}
      <ul className=" mt-8">
        {menuItems.map((item) => {
          if (item.children) {
            return (
              <section key={item.name}>
                {/* Section title */}
                <p className="!mt-4 mb-2 text-xs py-1 text-gray-400 uppercase font-bold">
                  {item.name}
                </p>
                <ul className="space-y-2">
                  {item.children.map((child) => {
                    const isActive = pathname === child.path;
                    return (
                      <li
                        key={child.name}
                        onClick={() => handleNavigation(child.path)}
                        className={`flex items-center gap-3 p-2 rounded cursor-pointer  font-medium ${
                          isActive ? " text-[#BA6FDE]" : "text-white"
                        }`}
                      >
                        {/* Icon */}
                        <Image
                          src={
                            isActive ? child.activeIcon ?? "" : child.icon ?? ""
                          }
                          alt={child.name}
                          width={20}
                          height={20}
                        ></Image>
                        {/* Item name */}
                        <span className={styles.titleText}>{child.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          }

          const isActive = pathname === item.path;
          return (
            <li
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className={`menuItem flex items-center gap-3 p-2 rounded cursor-pointer font-medium  ${
                isActive
                  ? `text-[#BA6FDE] ${styles[item.gradientClass ?? ""]}`
                  : "text-white "
              }`}
            >
              {/* Icon */}
              <Image
                src={isActive ? item.activeIcon ?? "" : item.icon ?? ""}
                alt={item.name}
                width={20}
                height={20}
              />
              {/* Item name */}
              <span className={styles.titleText}>{item.name}</span>
            </li>
          );
        })}
      </ul>

      {/* Sidebar footer */}
      <div className="footer text-gray-400 text-xs mt-auto">
        <p>
          Podbay v2.9.6 by{" "}
          <Link className="hover:underline" href="https://fancysoups.com/">
            Fancy Soups
          </Link>
          .
        </p>
        <p className="flex gap-3">
          <Link className="hover:underline" href="https://podbay.fm/about">
            About
          </Link>
          <Link className="hover:underline" href="https://podbay.fm/podcasts">
            All Podcasts
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
