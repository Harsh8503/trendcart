import { useMemo, useState } from "react";
import tech from "../data/tech";
import ProductCard from "../components/ProductCard";
import {
  IconCpu,
  IconBolt,
  IconShieldCheck,
  IconHeadphones,
  IconArrowRight,
  IconDeviceGamepad2,
  IconSearch,
  IconFilter,
  IconChevronDown,
  IconShoppingBag,
  IconSparkles,
} from "@tabler/icons-react";

export default function Tech() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const features = [
    { icon: IconCpu, title: "Smart Devices" },
    { icon: IconBolt, title: "Fast Performance" },
    { icon: IconShieldCheck, title: "Trusted Picks" },
    { icon: IconHeadphones, title: "Cool Accessories" },
  ];

  const scrollToProducts = () => {
    document.getElementById("products-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const filteredProducts = useMemo(() => {
    let items = [...tech];

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
    <div className="min-h-screen bg-[#030712] text-white pt-[130px] pb-14 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_30%),linear-gradient(to_bottom,#030712,#0b1120,#030712)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-4 sm:p-6 md:p-8 mb-8 md:mb-12">
          <div className="absolute -top-16 -left-16 h-52 w-52 md:h-72 md:w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-52 w-52 md:h-72 md:w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left */}
            <div>
              <p className="text-cyan-400 text-[11px] md:text-sm uppercase tracking-[4px] md:tracking-[6px] font-semibold">
                Latest Gadgets
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mt-3">
                Upgrade Your
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Tech Setup
                </span>
              </h1>

              <p className="text-gray-300 mt-4 text-sm md:text-base leading-6 md:leading-7 max-w-xl">
                Discover trending electronics, gaming gear, smart devices and
                premium accessories with the best affiliate deals.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={scrollToProducts}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
                >
                  Shop Collection
                </button>

                <button
                  onClick={scrollToProducts}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/15 hover:bg-white/10 transition flex items-center justify-center gap-2"
                >
                  Explore More
                  <IconArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-5 md:p-6">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-cyan-400 mb-4">
                  <IconDeviceGamepad2 size={26} stroke={1.8} />
                </div>

                <h3 className="text-xl md:text-2xl font-bold">
                  Premium Gadgets
                </h3>

                <p className="text-gray-300 text-sm mt-2">
                  Smart picks for gaming, office setup and daily productivity.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3 md:p-4 hover:bg-white/10 transition"
                    >
                      <div className="h-10 w-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3">
                        <Icon size={20} stroke={1.8} />
                      </div>

                      <h3 className="text-sm md:text-base font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-[11px] md:text-xs text-gray-400 mt-1">
                        Top quality picks
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Search + Sort + Heading */}
        <section className="border-t border-white/10 pt-8 md:pt-10">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-6">
            <div>
              <p className="text-cyan-400 uppercase tracking-[4px] text-xs md:text-sm">
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
                  placeholder="Search tech..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-12 rounded-full bg-white/5 border border-white/10 pl-11 pr-4 outline-none focus:border-cyan-400 text-sm"
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
                  className="w-full h-12 rounded-full bg-[#111827] border border-cyan-400/50 pl-11 pr-10 outline-none text-sm text-white appearance-none cursor-pointer focus:border-cyan-400"
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

          <div
            id="products-section"
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 scroll-mt-24"
          >
            <div>
              <p className="text-cyan-400 uppercase tracking-[4px] text-xs md:text-sm">
                Best Picks
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2">
                Trending Tech Products
              </h2>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
              <IconShoppingBag size={17} />
              {filteredProducts.length} Products Found
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))
            ) : (
              <div className="col-span-full rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
                <div className="h-12 w-12 mx-auto rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                  <IconSparkles size={24} />
                </div>

                <h3 className="text-xl font-semibold">No Products Found</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Try another keyword to explore more gadgets.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}