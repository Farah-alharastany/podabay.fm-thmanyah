'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface NavigationArrowsProps {
  scrollRef?: React.RefObject<HTMLDivElement | null>;
  scrollAmount?: number;
  //It can be user to scroll left & right or can be used to navigate
  type?: "scroll" | "history";
}

const NavigationArrows: React.FC<NavigationArrowsProps> = ({
  scrollRef,
  scrollAmount = 200,
  type = "scroll",
}) => {
  const router = useRouter();

  const handleLeft = () => {
    if (type === "scroll") {
      if (scrollRef?.current) {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    } else if (type === "history") {
      window.history.back();
    }
  };

  const handleRight = () => {
    if (type === "scroll") {
      if (scrollRef?.current) {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else if (type === "history") {
      window.history.forward();
    }
  };

  return (
    <div className="sm:flex gap-1 hidden">
      <button onClick={handleLeft} className="group p-1 cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.10703 6L8.08594 3.02344C8.30625 2.80312 8.30625 2.44687 8.08594 2.22891C7.86563 2.00859 7.50938 2.01094 7.28906 2.22891L3.91406 5.60156C3.70078 5.81484 3.69609 6.15703 3.89766 6.37734L7.28672 9.77344C7.39688 9.88359 7.54219 9.9375 7.68516 9.9375C7.82813 9.9375 7.97344 9.88359 8.08359 9.77344C8.30391 9.55312 8.30391 9.19687 8.08359 8.97891L5.10703 6Z"
            className="fill-gray-500 group-hover:fill-white"
          />
        </svg>
      </button>

      <button onClick={handleRight} className="group p-1 cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.89297 6L3.91406 3.02344C3.69375 2.80313 3.69375 2.44688 3.91406 2.22891C4.13437 2.01094 4.49062 2.01094 4.71094 2.22891L8.08594 5.60156C8.29922 5.81484 8.30391 6.15703 8.10234 6.37734L4.71328 9.77344C4.60312 9.88359 4.45781 9.9375 4.31484 9.9375C4.17187 9.9375 4.02656 9.88359 3.91641 9.77344C3.69609 9.55313 3.69609 9.19688 3.91641 8.97891L6.89297 6Z"
            className="fill-gray-500 group-hover:fill-white"
          />
        </svg>
      </button>
    </div>
  );
};

export default NavigationArrows;
