import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import NewsEverythingCard from "./NewsEverythingCard";
import newsParams from "../../data/newsparameters.json";

import useRequestData from "../../hooks/useRequestData";

import { FullWidthInnerContainer } from "../../layout/Container";

const NewsEverything = () => {
  const { makeRequest, isLoading, data, error } = useRequestData();
  const [language, setLanguage] = useState("en");

  const [query, setQuery] = useState("dollar");

  useEffect(() => {
    // makeRequest({
    //     url: "https://newsapi.org/v2/everything",
    //     method: "GET",
    //     params: {
    //         q: query,
    //         language: "en",
    //         apiKey: import.meta.env.VITE_APP_NEWSAPIKEY
    //     }
    // })
  }, []);

  const handleSearch = (e) => {
    if (e) e.preventDefault(); //Undgå reload

    makeRequest({
      url: "https://newsapi.org/v2/everything",
      method: "GET",
      params: {
        q: query,
        language: language,
        apiKey: import.meta.env.VITE_APP_NEWSAPIKEY,
      },
    });
  };

  return (
    <FullWidthInnerContainer>
      <div>
        <h1 className="text-3xl font-bold text-center ">
          Nyheder - everything
        </h1>
      </div>

      {isLoading && <Loader />}

      {error && <Error />}

      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center gap-2 my-6"
      >
        {/* søgefelt */}
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Søg..."
          className="px-4 py-2 w-64 text-black rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
        
        {/* language select */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-black"
        >
          {newsParams.language.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.language} 
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="px-4 py-2 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
        >
          🔍 Søg
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {data &&
          data.articles.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Billede */}
              {a.urlToImage && (
                <img
                  src={
                    a.urlToImage.length > 3
                      ? a.urlToImage
                      : "https://dummyimage.com/1280x728/fff/aaa"
                  }
                  //src={a.urlToImage || "https://dummyimage.com/1280x728/fff/aaa"}
                  alt={a.title}
                  className="w-full h-48 object-cover"
                />
              )}

              {/* Content */}
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
                  {a.title}
                </h2>

                <p className="text-sm text-gray-500">{a.source.name}</p>

                <p className="text-black">{a.description?.slice(0, 50)}...</p>

                {/* Link */}
                <Link
                  className="text-black"
                  to="/newsdetails"
                  state={{ article: a }}
                >
                  Læs mere →
                </Link>
              </div>
            </div>
          ))}
      </div>
    </FullWidthInnerContainer>
  );
};

export default NewsEverything;
