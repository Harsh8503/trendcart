import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import fashion from "../data/fashion";
import tech from "../data/tech";
import decorandgifts from "../data/decorandgifts";
import ProductCard from "../components/ProductCard";
import {
  IconArrowRight,
  IconBolt,
  IconShieldCheck,
  IconTrendingUp,
  IconSparkles,
  IconSearch,
  IconMail,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [email, setEmail] = useState("");

  const allProducts = [
    ...fashion.map((item) => ({ ...item, category: "fashion" })),
    ...tech.map((item) => ({ ...item, category: "tech" })),
    ...decorandgifts.map((item) => ({ ...item, category: "decor" })),
  ];

  const scrollToProducts = () => {
    document.getElementById("home-products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const stats = [
    { value: "500+", label: "Trending Products" },
    { value: "Daily", label: "Fresh Deals" },
    { value: "Top", label: "Affiliate Picks" },
  ];

  const features = [
    { icon: IconBolt, title: "Fast Trending Finds" },
    { icon: IconShieldCheck, title: "Trusted Picks" },
    { icon: IconTrendingUp, title: "Best Deals Daily" },
  ];

  const tabs = [
    { id: "all", label: "All" },
    { id: "fashion", label: "Fashion" },
    { id: "tech", label: "Tech" },
    { id: "decor", label: "Decor" },
  ];

  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const filteredProducts = useMemo(() => {
    let items = [...allProducts];

    if (activeTab !== "all") {
      items = items.filter((item) => item.category === activeTab);
    }

    if (search.trim()) {
      items = items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return shuffleArray(items).slice(0, 10);
  }, [search, activeTab]);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    alert("Thanks for subscribing to TrendCart!");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white pt-[82px] pb-14 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_22%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_25%),radial-gradient(circle_at_bottom_center,rgba(14,165,233,0.10),transparent_28%),linear-gradient(to_bottom,#050816,#0b1020,#050816)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* HERO */}
        <section className="py-6 md:py-10">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left */}
            <div>
              <p className="text-cyan-400 text-[11px] md:text-sm uppercase tracking-[4px] md:tracking-[6px] font-semibold">
                Welcome to TrendCart
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mt-3">
                Discover
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Viral Products
                </span>
                <span className="block text-white/90">& Best Deals</span>
              </h1>

              <p className="text-gray-300 mt-5 text-sm md:text-base leading-6 md:leading-7 max-w-xl">
                Explore trending gadgets, premium fashion, stylish decor and hot
                online finds — all in one premium destination.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <button
                  onClick={scrollToProducts}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-[1.02] transition"
                >
                  Shop Now
                </button>

                <button
                  onClick={scrollToProducts}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/15 hover:bg-white/10 transition flex items-center justify-center gap-2"
                >
                  Explore Deals
                  <IconArrowRight size={18} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-7">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3 md:p-4"
                  >
                    <h3 className="text-lg md:text-2xl font-bold text-cyan-400">
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
            <div className="grid gap-4">
              <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-5 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center">
                    <IconSparkles size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Featured Today</p>
                    <h3 className="text-xl md:text-2xl font-bold">
                      Premium Picks
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/tech"
                    className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4 border border-white/10"
                  >
                    <p className="text-sm font-semibold">Tech Deals</p>
                    <p className="text-xs text-gray-400 mt-1">Trending gadgets</p>
                  </Link>

                  <Link
                    to="/fashion"
                    className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-4 border border-white/10"
                  >
                    <p className="text-sm font-semibold">Fashion Picks</p>
                    <p className="text-xs text-gray-400 mt-1">Stylish essentials</p>
                  </Link>

                  <Link
                    to="/decorandgifts"
                    className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-4 border border-white/10"
                  >
                    <p className="text-sm font-semibold">Gift Ideas</p>
                    <p className="text-xs text-gray-400 mt-1">Surprise everyone</p>
                  </Link>

                  <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-4 border border-white/10">
                    <p className="text-sm font-semibold">Daily Offers</p>
                    <p className="text-xs text-gray-400 mt-1">Best prices now</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {features.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400 mb-3">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Search + Products */}
        <section className="border-t border-white/10 pt-8 md:pt-10 mt-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-6">
            <div>
              <p className="text-cyan-400 uppercase tracking-[4px] text-xs md:text-sm">
                Find Products
              </p>
              <h2 className="text-2xl md:text-4xl font-bold mt-2">
                Search & Explore
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative w-full sm:w-[320px]">
                <IconSearch
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-12 rounded-full bg-white/5 border border-white/10 pl-11 pr-4 outline-none"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 h-12 rounded-full text-sm border whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-cyan-400 text-black border-cyan-400"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            id="home-products"
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {filteredProducts.map((item) => (
              <ProductCard key={`${item.category}-${item.id}`} {...item} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mt-10 rounded-[30px] border border-white/10 bg-white/5 p-5 md:p-8">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-cyan-400 uppercase tracking-[4px] text-xs md:text-sm">
                Stay Updated
              </p>
              <h2 className="text-2xl md:text-4xl font-bold mt-2">
                Get New Deals First
              </h2>
              <p className="text-sm text-gray-400 mt-3">
                Subscribe for trending products and exclusive offers.
              </p>
            </div>

            <form
              onSubmit={handleNewsletter}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <IconMail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 rounded-full bg-[#0a1225] border border-white/10 pl-11 pr-4 outline-none"
                />
              </div>

              <button className="h-12 px-6 rounded-full bg-cyan-400 text-black font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <section className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-cyan-400 transition"
          >
            <IconBrandInstagram size={18} />
            Follow TrendCart for more trending finds
          </a>
        </section>
      </div>
    </div>
  );
}