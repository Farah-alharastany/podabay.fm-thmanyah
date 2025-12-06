"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";

export interface DropdownItem {
  label: string;
  hasDivider?: boolean;
  action?: () => void;
  href?: string;
}

interface DropdownProps {
  items: DropdownItem[];
  fillColor: string;
}

const Dropdown: React.FC<DropdownProps> = ({ items, fillColor }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // ✅ إغلاق عند الضغط خارج الدروب داون
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // ✅ إغلاق تلقائي عند أي Scroll (أفقي أو عمودي)
  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className="cursor-pointer p-1 rounded hover:bg-black/30"
        aria-label="Open menu"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M11 7.33333C12.0083 7.33333 12.8333 6.50833 12.8333 5.5C12.8333 4.49167 12.0083 3.66667 11 3.66667C9.99167 3.66667 9.16667 4.49167 9.16667 5.5C9.16667 6.50833 9.99167 7.33333 11 7.33333ZM11 9.16667C9.99167 9.16667 9.16667 9.99167 9.16667 11C9.16667 12.0083 9.99167 12.8333 11 12.8333C12.0083 12.8333 12.8333 12.0083 12.8333 11C12.8333 9.99167 12.0083 9.16667 11 9.16667ZM11 14.6667C9.99167 14.6667 9.16667 15.4917 9.16667 16.5C9.16667 17.5083 9.99167 18.3333 11 18.3333C12.0083 18.3333 12.8333 17.5083 12.8333 16.5C12.8333 15.4917 12.0083 14.6667 11 14.6667Z"
            fill={fillColor}
          />
        </svg>
      </button>

      {open &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed z-[999999]"
            style={{
              top: buttonRef.current?.getBoundingClientRect().bottom ?? 0,
              left: buttonRef.current
                ? buttonRef.current.getBoundingClientRect().left - 150
                : 0,
            }}
          >
            <ul className="dropdown bg-gradient-to-tr from-[#404080] to-[#6B4080] rounded-lg shadow-xl text-white p-2 border border-white/10 min-w-[180px]">
              {items.map((item, index) => (
                <React.Fragment key={`${item.label}-${index}`}>
                  <li className="px-3 py-2 text-xs rounded-md hover:bg-black/30 transition cursor-pointer">
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block w-full text-left cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          item.action?.();
                          setOpen(false);
                        }}
                        className="w-full text-left cursor-pointer"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>

                  {item.hasDivider && (
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-1" />
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Dropdown;
