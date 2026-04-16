import { useMemo, useState } from "react";
import fashion from "../data/fashion";
import ProductCard from "../components/ProductCard";
import {
  IconArrowRight,
  IconStar,
  IconCrown,
  IconShoppingBag,
  IconSearch,
  IconSparkles,
  IconFilter,
  IconChevronDown,
} from "@tabler/icons-react";

export default function Fashion() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const scrollToProducts = () => {
    document.getElementById("fashion-products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const filteredProducts = useMemo(() => {
    let items = [...fashion];

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
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-[130px] pb-14 overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(201,169,110,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_28%),linear-gradient(to_bottom,#0a0a0a,#121212,#0a0a0a)]" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left */}
          <div className="order-2 lg:order-1 py-2 md:py-4">
            <p className="text-[#c9a96e] uppercase tracking-[4px] md:tracking-[6px] text-[11px] md:text-sm font-semibold">
              Luxury Fashion Collection
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mt-3">
              Wear the
              <span className="block text-[#c9a96e] italic font-serif">
                Trend
              </span>
            </h1>

            <p className="text-gray-400 mt-4 text-sm md:text-base leading-6 md:leading-7 max-w-xl">
              Discover elegant styles, premium outfits, trending essentials and
              handpicked fashion deals designed to upgrade your lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={scrollToProducts}
                className="w-full sm:w-auto px-6 py-3 bg-[#c9a96e] text-black rounded-full font-semibold hover:scale-[1.02] transition"
              >
                Shop Collection
              </button>

              <button
                onClick={scrollToProducts}
                className="w-full sm:w-auto px-6 py-3 border border-white/15 rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                Explore Styles
                <IconArrowRight size={18} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6 md:mt-8">
              {[
                { value: "500+", label: "Styles" },
                { value: "Top", label: "Brands" },
                { value: "Daily", label: "Deals" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-3 md:p-4 bg-white/5"
                >
                  <h3 className="text-lg md:text-2xl font-bold text-[#c9a96e]">
                    {item.value}
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-400 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-[24px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#111111] p-3">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
                alt="Fashion"
                className="w-full h-[280px] sm:h-[360px] md:h-[460px] lg:h-[520px] object-cover rounded-[18px]"
              />
            </div>

            <div className="hidden md:block absolute top-5 -left-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 w-40">
              <div className="flex items-center gap-2 text-[#c9a96e]">
                <IconStar size={16} />
                <span className="text-xs font-semibold">Premium Picks</span>
              </div>
              <p className="text-[11px] text-gray-400 mt-2">
                Trending curated outfits
              </p>
            </div>

            <div className="hidden md:block absolute bottom-6 -right-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 w-40">
              <div className="flex items-center gap-2 text-[#c9a96e]">
                <IconCrown size={16} />
                <span className="text-xs font-semibold">Luxury Style</span>
              </div>
              <p className="text-[11px] text-gray-400 mt-2">
                Elegant essentials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search + Sort */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-10">
        <div className="border-t border-white/10 pt-8 md:pt-10">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-6">
            <div>
              <p className="text-[#c9a96e] uppercase tracking-[4px] text-xs md:text-sm">
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
                  placeholder="Search fashion..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-12 rounded-full bg-white/5 border border-white/10 pl-11 pr-4 outline-none focus:border-[#c9a96e] text-sm"
                />
              </div>

              {/* Fixed Premium Sort Dropdown */}
              <div className="relative w-full sm:w-[190px]">
                <IconFilter
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10"
                />

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full h-12 rounded-full bg-[#111111] border border-[#c9a96e]/60 pl-11 pr-10 outline-none text-sm text-white appearance-none cursor-pointer focus:border-[#c9a96e]"
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
            id="fashion-products"
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 scroll-mt-24"
          >
            <div>
              <p className="text-[#c9a96e] uppercase tracking-[4px] text-xs md:text-sm">
                New Arrivals
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2">
                Trending Fashion Products
              </h2>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
              <IconShoppingBag size={17} />
              {filteredProducts.length} Products Found
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}