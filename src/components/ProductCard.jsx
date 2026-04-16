export default function ProductCard({ title, image, price, link, tag }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/10">

      {/* TAG */}
      {tag && (
        <span className="absolute top-3 left-3 z-10 text-xs px-3 py-1 rounded-full bg-blue-600 text-white">
          {tag}
        </span>
      )}

      {/* IMAGE */}
      <div className="h-72 bg-[#0f0f0f] flex items-center justify-center p-3 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">

        <h3 className="text-sm font-semibold text-white line-clamp-2 min-h-[40px]">
          {title}
        </h3>

        <p className="text-blue-400 font-bold mt-2">
          {price}
        </p>

        {/* BUTTON */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
        >
          Buy Now
        </a>

      </div>

      {/* HOVER GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />
      </div>

    </div>
  );
}