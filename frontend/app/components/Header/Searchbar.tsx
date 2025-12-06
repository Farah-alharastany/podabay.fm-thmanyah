// components/Searchbar.tsx
"use client";
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
    // التحقق من المسار الحالي عند تحميل المكون
    const pathname = window.location.pathname;
    setIsSearchPage(pathname === "/search");

    // إذا كان هناك initialTerm، عينه
    if (initialTerm) {
      setSearchTerm(initialTerm);
    }
  }, [initialTerm]);

  // تركيز تلقائي عند فتح صفحة البحث
  useEffect(() => {
    if (isSearchPage && inputRef.current) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          // وضع المؤشر في نهاية النص
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
      // إذا كنا في الصفحة الرئيسية، انقل إلى صفحة البحث
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
        // إذا كنا في صفحة البحث، استخدم onSearch
        if (onSearch) {
          onSearch(searchTerm);
        }
      } else {
        // إذا كنا في الصفحة الرئيسية، انتقل إلى صفحة البحث
        window.location.href = `/search?term=${encodeURIComponent(
          searchTerm.trim()
        )}`;
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // إذا كان في صفحة البحث ونريد بحث في الوقت الحقيقي (اختياري)
    // if (isSearchPage && onSearch) {
    //   onSearch(value);
    // }
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
