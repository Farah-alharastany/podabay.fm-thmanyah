"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductsContainer from "../components/Products/ProductsContainer";
import Loader from "../components/Loader/LoaderContainer";
import Sidebar from "../components/Sidebar/SidebarContainer";
import { Product } from "../components/types";
import HeaderContainer from "../components/Header/HeaderContainer";

export default function SearchPage() {
  const [podcasts, setPodcasts] = useState<Product[]>([]);
  const [episodes, setEpisodes] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("term") || "";

  // جلب البيانات عند تحميل الصفحة أو تغيير مصطلح البحث
  useEffect(() => {
    if (searchTerm.trim()) {
      fetchSearchResults(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchResults = async (term: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:4000/search?term=${encodeURIComponent(term)}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }

      const data = await response.json();
      // تحويل البودكاستات إلى واجهة Product
      const formattedPodcasts = (data.podcasts || []).map(
        (podcast: any, index: number) => ({
          id: podcast.id || podcast.itunesId || index,
          title: podcast.title,
          artist: podcast.artist || "Unknown Author",
          image:
            podcast.image ||
            podcast.artworkUrl600 ||
            "/images/default-podcast.jpg",
          hrefLink: podcast.collectionViewUrl || "#",
          metadata: {
            type: "podcast",
            feedUrl: podcast.feedUrl,
          },
        })
      );
      const formatDate = (dateString: string) => {
        if (!dateString) return "";

        const date = new Date(dateString);

        return date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
        });
      };

      const formattedEpisodes = (data.episodes || []).map(
        (episode: any, index: number) => ({
          id: episode.id || episode.itunesId || 10000 + index,
          title: episode.title || "Untitled Episode",
          collectionName: episode.collectionName,
          description:
            episode.description?.substring(0, 50) + "..." || "No description",

          image:
            episode.image ||
            episode.artworkUrl600 ||
            "/images/default-episode.jpg",
          hrefLink: episode.audioUrl || "#",
          date: formatDate(episode.releaseDate),
          duration: episode.duration,
          metadata: {
            type: "episode",
            audioUrl: episode.audioUrl,
          },
        })
      );

      setPodcasts(formattedPodcasts);
      setEpisodes(formattedEpisodes);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (term: string) => {
    if (term.trim()) {
      window.history.pushState(
        {},
        "",
        `/search?term=${encodeURIComponent(term)}`
      );
      fetchSearchResults(term);
    }
  };

  return (
    <div className="flex items-start min-h-screen bg-gray-900  pt-16">
      <Sidebar />
      <div className="content lg:w-[83%] lg:ml-[16.8%] w-full ml-0">
        <HeaderContainer searchTerm={searchTerm} onSearch={handleSearch} />

        <div className="max-w-7xl mx-auto">
          {loading && <Loader />}

          {error && (
            <div className="bg-red-900/30 border border-red-700 rounded-xl p-6 mb-6">
              <h3 className="text-red-300 font-bold mb-2">Search Error</h3>
              <p className="text-red-400 mb-4">Error: {error}</p>
              <button
                onClick={() => fetchSearchResults(searchTerm)}
                className="px-4 py-2 bg-red-700/30 text-red-300 rounded-lg hover:bg-red-700/50 transition-colors text-sm"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && (
            <>
              {podcasts.length > 0 && (
                <div className="mb-10">
                  <ProductsContainer
                    title={`Top podcasts for ${searchTerm}`}
                    products={podcasts}
                    containerType="podcasts-container"
                    cardTypeToShow="standard"
                  />
                </div>
              )}

              {episodes.length > 0 && (
                <div className="mb-10">
                  <ProductsContainer
                    title={`Top episodes for ${searchTerm}`}
                    products={episodes}
                    containerType="episodes-container"
                    availableViews={["grid", "scroll", "list", "compact"]}
                    cardTypeToShow="grid"
                  />
                </div>
              )}

              {/* حالة عدم وجود نتائج */}
              {podcasts.length === 0 && episodes.length === 0 && searchTerm && (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-bold mb-3 text-center text-gray-400 mt-20">
                    No results found
                  </h3>
                  <p className="text-center text-gray-400 mt-5 font-medium">
                    We couldn't find any podcasts or episodes matching "
                    {searchTerm}"
                  </p>
                </div>
              )}

              {/* حالة البحث الأولي */}
              {!searchTerm && (
                <div className="text-center text-gray-400 mt-20 font-medium">
                  Type in a search term to start.{" "}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
