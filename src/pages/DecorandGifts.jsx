import { useMemo, useState } from "react";
import decorandgifts from "../data/decorandgifts";
import ProductCard from "../components/ProductCard";
import {
  IconGift,
  IconArrowRight,
  IconSparkles,
  IconHeart,
  IconStars,
  IconConfetti,
  IconSearch,
  IconFilter,
  IconChevronDown,
  IconShoppingBag,
} from "@tabler/icons-react";

export default function DecorandGifts() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const scrollToProducts = () => {
    document.getElementById("decor-products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const highlights = [
    { icon: IconGift, title: "Perfect Gifts", desc: "Thoughtful premium picks" },
    { icon: IconSparkles, title: "Elegant Decor", desc: "Upgrade your space" },
    { icon: IconHeart, title: "Loved Items", desc: "Most wished products" },
  ];

  const filteredProducts = useMemo(() => {
    let items = [...decorandgifts];

    if (search.trim()) {
      items = items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortBy === "az") {
      items.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortBy === "za") {
      items.sort((a, b) => b.title.localeCompare(a.title));
    }

    return items;
  }, [search, sortBy]);

  return (
    <div className="min-h-screen bg-[#0f0b08] text-white pt-[130px] pb-14 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.12),transparent_28%),linear-gradient(to_bottom,#0f0b08,#1a120d,#0f0b08)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Hero */}
        <section className="mb-8 md:mb-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5 md:gap-8 items-stretch">
            {/* Left */}
            <div className="relative rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 sm:p-6 md:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-amber-300/10 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 h-40 w-40 bg-pink-400/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                <p className="text-amber-300 text-[11px] md:text-sm uppercase tracking-[4px] md:tracking-[6px] font-semibold">
                  Decor & Gifts Collection
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mt-3">
                  Add Beauty
                  <span className="block text-transparent bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text">
                    To Every Moment
                  </span>
                </h1>

                <p className="text-gray-300 mt-4 text-sm md:text-base leading-6 md:leading-7 max-w-xl">
                  Discover premium home decor, thoughtful gifts, celebration
                  essentials and charming products crafted to impress.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button
                    onClick={scrollToProducts}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-amber-300 text-black font-semibold hover:scale-[1.02] transition"
                  >
                    Shop Collection
                  </button>

                  <button
                    onClick={scrollToProducts}
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/15 hover:bg-white/10 transition flex items-center justify-center gap-2"
                  >
                    Explore Gifts
                    <IconArrowRight size={18} />
                  </button>
                </div>

                {/* Highlights */}
                <div className="grid sm:grid-cols-3 gap-3 mt-6">
                  {highlights.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <div className="h-10 w-10 rounded-xl bg-amber-300/10 text-amber-300 flex items-center justify-center mb-3">
                          <Icon size={20} />
                        </div>

                        <h3 className="text-sm font-semibold">{item.title}</h3>
                        <p className="text-[11px] text-gray-400 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="grid grid-rows-2 gap-5">
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-amber-300/10 to-transparent p-5 md:p-6 flex flex-col justify-between min-h-[220px]">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-300">
                  <IconStars size={24} />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    Luxury Decor Picks
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">
                    Stylish room upgrades & cozy home vibes.
                  </p>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-pink-400/10 to-transparent p-5 md:p-6 flex flex-col justify-between min-h-[220px]">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-pink-300">
                  <IconConfetti size={24} />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    Celebration Gifts
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">
                    Surprise loved ones with premium gift ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search + Sort */}
        <section className="border-t border-white/10 pt-8 md:pt-10">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-6">
            <div>
              <p className="text-amber-300 uppercase tracking-[4px] text-xs md:text-sm">
                Explore Collection
              </p>

              <h2 className="text-2xl md:text-4xl font-bold mt-2">
                Search & Discover
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              {/* Search */}
              <div className="relative w-full sm:w-[320px]">
                <IconSearch
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search decor..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-12 rounded-full bg-white/5 border border-white/10 pl-11 pr-4 outline-none focus:border-amber-300 text-sm"
                />
              </div>

              {/* Sort */}
              <div className="relative w-full sm:w-[190px]">
                <IconFilter
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
                />

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full h-12 rounded-full bg-[#1a120d] border border-amber-300/50 pl-11 pr-10 outline-none text-sm text-white appearance-none cursor-pointer focus:border-amber-300"
                >
                  <option value="default">Sort Products</option>
                  <option value="az">Name : A to Z</option>
                  <option value="za">Name : Z to A</option>
                </select>

                <IconChevronDown
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Heading */}
          <div
            id="decor-products"
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 scroll-mt-24"
          >
            <div>
              <p className="text-amber-300 uppercase tracking-[4px] text-xs md:text-sm">
                Best Picks
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2">
                Decor & Gift Products
              </h2>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
              <IconShoppingBag size={17} />
              {filteredProducts.length} Products Found
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))
            ) : (
              <div className="col-span-full rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
                <div className="h-12 w-12 mx-auto rounded-2xl bg-amber-300/10 text-amber-300 flex items-center justify-center mb-4">
                  <IconSparkles size={24} />
                </div>

                <h3 className="text-xl font-semibold">No Products Found</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Try another keyword to explore more decor & gifts.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}