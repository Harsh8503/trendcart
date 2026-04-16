export default function ProductCard({ title, image, price, link, tag,imgClass }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">

      {/* TAG */}
      {tag && (
        <span className="absolute top-3 left-3 z-10 text-xs px-3 py-1 rounded-full bg-blue-600 text-white">
          {tag}
        </span>
      )}

      {/* IMAGE */}
      <div className="relative h-[350px] w-full overflow-hidden bg-[#111]">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover object-top transition duration-500 group-hover:scale-105 ${imgClass}`}
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white  ">
          {title}
        </h3>

        <p className="text-blue-400 font-bold mt-0 text-xl">
          {price}
        </p>

        {/* BUTTON */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full text-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
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