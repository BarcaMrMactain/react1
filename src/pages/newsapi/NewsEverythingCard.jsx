import { Link } from "react-router";
import { formatDistanceToNow } from "date-fns";
import { da } from "date-fns/locale";

const NewsEverythingCard = ({ article }) => {
  return (
    <div className="bg-black text-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
      {/* Billede */}
      <img
        src={
          article.urlToImage ||
          "https://placehold.co/400x250/111827/ffffff?text=No+Image"
        }
        alt={article.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-bold line-clamp-2">{article.title}</h2>

        <p className="text-sm text-gray-400">
          {formatDistanceToNow(new Date(article.publishedAt), {
            locale: da,
            addSuffix: true,
          })}
        </p>

        <p className="text-sm text-gray-400">{article.source.name}</p>

        <p className="text-sm">{article.description?.slice(0, 60)}...</p>

        {/* 🔥 Link til details */}
        <Link
          to="/newsdetails"
          state={{ article }}
          className="mt-2 inline-block text-blue-400 font-semibold hover:underline"
        >
          Læs mere →
        </Link>
      </div>
    </div>
  );
};

export default NewsEverythingCard;
