'use client';
import React, { useState, useEffect, useRef } from "react";

interface SearchbarProps {
  initialTerm?: string;
  onSearch?: (term: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({
  initialTerm = "",
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState(initialTerm);
  const [isSearchPage, setIsSearchPage] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check current path when component mounts
    const pathname = window.location.pathname;
    setIsSearchPage(pathname === "/search");

    // Set initial term if provided
    if (initialTerm) {
      setSearchTerm(initialTerm);
    }
  }, [initialTerm]);

  // Auto-focus input when on search page
  useEffect(() => {
    if (isSearchPage && inputRef.current) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          // Place cursor at the end of text
          if (searchTerm) {
            inputRef.current.setSelectionRange(
              searchTerm.length,
              searchTerm.length
            );
          }
        }
      }, 100);
    }
  }, [isSearchPage, searchTerm]);

  const handleFocus = () => {
    if (!isSearchPage) {
      // If on home page, navigate to search page
      if (searchTerm.trim()) {
        window.location.href = `/search?term=${encodeURIComponent(
          searchTerm.trim()
        )}`;
      } else {
        window.location.href = "/search";
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      if (isSearchPage) {
        // If on search page, use onSearch callback
        if (onSearch) {
          onSearch(searchTerm);
        }
      } else {
        // If on home page, navigate to search page
        window.location.href = `/search?term=${encodeURIComponent(
          searchTerm.trim()
        )}`;
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyPress={handleKeyPress}
        readOnly={!isSearchPage}
        className="searchbar focus:placeholder-transparent
 border w-full px-1 py-1 text-sm h-9 border-gray-600 rounded-xl text-center text-white focus:!bg-[#232432] focus:!border-[#7a7af0] focus:!outline-none"
        placeholder="Search through over 70 million podcasts and episodes..."
      />
    </div>
  );
};

export default Searchbar;
