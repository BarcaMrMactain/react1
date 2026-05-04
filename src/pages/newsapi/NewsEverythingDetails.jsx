import { useLocation, Link, Navigate } from "react-router";
import { format, formatDistanceToNow } from "date-fns";
import { da } from "date-fns/locale";


const NewsEverythingDetails = () => {
    const location = useLocation();
    
    // Hvis man går direkte ind på siden
    if (!location.state?.article) {
        return <Navigate to="/news" replace />;
    }
    
    const { article } = location.state;
    const date = new Date(article.publishedAt);

  return (
    <div className="bg-gray-900 min-h-screen text-white py-6">
      <div className="max-w-3xl mx-auto px-4">

        {/* Titel */}
        <h1 className="text-3xl font-bold mb-4">
          {article.title}
        </h1>

        {/* Dato */}
        <p className="text-sm text-gray-400 mb-4">
          {formatDistanceToNow(date, { locale: da, addSuffix: true })} ·{" "}
          {format(date, "d. MMMM yyyy 'kl.' HH:mm", { locale: da })}
        </p>

        {/* Billede */}
        <img
          src={
            article.urlToImage ||
            "https://placehold.co/600x300/111827/ffffff?text=No+Image"
          }
          alt={article.title}
          className="w-full h-64 object-cover rounded mb-4"
        />

        {/* Beskrivelse */}
        <p className="mb-4 text-gray-200">
          {article.description}
        </p>

        {/* Content */}
        <p className="mb-4 text-gray-300">
          {article.content}
        </p>

        {/* Kilde */}
        <p className="text-gray-400">
          <strong>Kilde:</strong> {article.source.name}
        </p>

        {/* Eksternt link */}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-400 hover:underline"
        >
          Gå til original artikel →
        </a>

        {/* Tilbage */}
        <Link
          to="/newseverything"
          className="inline-block mt-6 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        >
          ← Tilbage
        </Link>
      </div>
    </div>
  );
};

export default NewsEverythingDetails;