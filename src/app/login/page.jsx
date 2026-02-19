import React from 'react'

const page = props => {
  return (
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Amr Kitchen – Cloud Kitchen in Dhaka</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-orange-50 text-slate-900">

  <!-- NAVBAR -->
  <header class="bg-white/95 backdrop-blur border-b border-orange-100 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

      <!-- Brand with logo image -->
      <div class="flex items-center gap-3">
        <div class="w-20 h-20 overflow-hidden bg-orange-500 rounded-xl">
          <img
            src="Untitled-1.png"
            alt="Amr Kitchen logo"
            class="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 class="font-semibold text-lg tracking-wide">Amr Kitchen</h1>
          <p class="text-xs text-slate-500">Your cloud kitchen • Dhaka</p>
        </div>
      </div>

      <!-- Center nav -->
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a href="#" class="hover:text-orange-500">Home</a>
        <a href="#browse" class="hover:text-orange-500">Cuisines</a>
        <a href="#browse" class="hover:text-orange-500">Dishes</a>
        <a href="#contact" class="hover:text-orange-500">Contact</a>
      </nav>

      <!-- Right side: profile + auth + cart -->
      <div class="flex items-center gap-3 text-sm">

        <!-- Profile picture upload (UI only) -->
        <div class="relative">
          <label class="cursor-pointer">
            <div class="w-9 h-9 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center text-[10px] leading-tight text-orange-700">
              Add<br>Photo
            </div>
            <input type="file" accept="image/*" class="hidden" />
          </label>
        </div>

        <!-- Auth buttons -->
        <button class="px-3 py-1.5 rounded-full border border-orange-400 text-orange-600 hover:bg-orange-50 transition">
          Log in
        </button>
        <button class="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
          Sign up
        </button>

        <!-- Cart -->
        <button class="relative p-2 rounded-full border border-orange-300 bg-white hover:bg-orange-50 transition">
          <span class="text-lg">🛒</span>
          <span class="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold rounded-full px-1.5">
            0
          </span>
        </button>
      </div>
    </div>
  </header>

  <!-- HERO -->
  <section class="bg-gradient-to-b from-orange-100 via-orange-50 to-orange-50">
    <div class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">

      <!-- Text -->
      <div class="space-y-4">
        <p class="text-xs uppercase tracking-[0.25em] text-orange-500">Cloud Kitchen • Dhaka</p>
        <h2 class="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
          Restaurant-style food, cooked like home, from one cloud kitchen.
        </h2>
        <p class="text-sm md:text-base text-slate-600">
          Amr Kitchen is your central cloud kitchen in Dhaka. Order biryani, bowls, snacks,
          and family meals prepared in one hygienic kitchen and delivered fast to your door.
        </p>

        <!-- Static info -->
        <div class="flex flex-wrap gap-3 text-xs md:text-sm">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-orange-100">
            <span>📍</span> New Address Road 71, Dhaka
          </div>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-orange-100">
            <span>⏰</span> Typical delivery: 30–45 min
          </div>
        </div>

        <!-- Search bar -->
        <div class="mt-4 bg-white rounded-full flex items-center gap-3 px-4 py-2 border border-orange-200 shadow-sm">
          <span class="text-orange-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search for biryani, bowls, snacks or combo meals..."
            class="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-slate-400"
          />
          <button class="px-3 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-xs font-semibold text-white">
            Search
          </button>
        </div>
      </div>

      <!-- Hero slider -->
      <div class="relative h-72 md:h-96">
        <div id="hero-slider" class="w-full h-full relative rounded-3xl overflow-hidden shadow-xl border border-orange-200 bg-white">

          <!-- Slide 1 -->
          <div
            data-hero-slide
            class="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100"
          >
            <img
              src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Kacchi set and platter"
              class="w-full h-full object-cover"
            />
            <div class="absolute -bottom-5 left-4 bg-white px-4 py-3 rounded-2xl shadow-lg text-xs md:text-sm border border-orange-200">
              <p class="font-semibold text-slate-900">Tonight’s Special at Amr Kitchen</p>
              <p class="text-orange-600">Kacchi set • Mixed platter • Dessert</p>
              <p class="text-slate-600 mt-1">From ৳320 per person</p>
            </div>
          </div>

          <!-- Slide 2 -->
          <div
            data-hero-slide
            class="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 pointer-events-none"
          >
            <img
              src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Family biryani combo"
              class="w-full h-full object-cover"
            />
            <div class="absolute -bottom-5 left-4 bg-white px-4 py-3 rounded-2xl shadow-lg text-xs md:text-sm border border-orange-200">
              <p class="font-semibold text-slate-900">Family Biryani Combo</p>
              <p class="text-orange-600">Chicken biryani • Salad • Drinks</p>
              <p class="text-slate-600 mt-1">Perfect for 3–4 people</p>
            </div>
          </div>

          <!-- Slide 3 -->
          <div
            data-hero-slide
            class="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 pointer-events-none"
          >
            <img
              src="https://images.pexels.com/photos/4109130/pexels-photo-4109130.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Evening snack box"
              class="w-full h-full object-cover"
            />
            <div class="absolute -bottom-5 left-4 bg-white px-4 py-3 rounded-2xl shadow-lg text-xs md:text-sm border border-orange-200">
              <p class="font-semibold text-slate-900">Evening Snack Box</p>
              <p class="text-orange-600">Wings • Fries • Dips • Drinks</p>
              <p class="text-slate-600 mt-1">From ৳220 per person</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- LOCATION + TOP FILTERS -->
  <section class="max-w-6xl mx-auto px-4 -mt-6 mb-4">
    <div class="bg-white rounded-2xl shadow-lg border border-orange-100 p-4 flex flex-col lg:flex-row gap-4 items-center">

      <!-- Location input -->
      <div class="flex-1 w-full">
        <label class="text-xs font-semibold text-slate-700">Find food near you</label>
        <div class="mt-1 flex gap-2">
          <input
            type="text"
            placeholder="Enter your road / area (e.g., Manda, Mugda, Rampura)..."
            class="flex-1 rounded-full border border-orange-200 px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <button class="px-3 py-1.5 rounded-full bg-orange-500 text-white text-xs hover:bg-orange-600">
            Use my location
          </button>
        </div>
      </div>

      <!-- Sort/Dist/Budget preview -->
      <div class="flex flex-wrap gap-3 w-full lg:w-auto justify-end text-xs">
        <div>
          <p class="font-semibold text-slate-700 mb-1">Sort</p>
          <p class="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200">
            Relevance
          </p>
        </div>
        <div>
          <p class="font-semibold text-slate-700 mb-1">Distance</p>
          <p class="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200">
            Within 5 km
          </p>
        </div>
        <div>
          <p class="font-semibold text-slate-700 mb-1">Budget</p>
          <p class="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200">
            All prices
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- BROWSE AREA: FILTER SIDEBAR + RESULTS -->
  <section id="browse" class="max-w-6xl mx-auto px-4 pb-10">
    <div class="grid lg:grid-cols-4 gap-6">
      
      <!-- FILTER SIDEBAR -->
      <aside class="lg:col-span-1">
        <div class="bg-white rounded-3xl border border-orange-100 shadow-sm p-4 text-sm">
          <h3 class="text-base font-semibold text-slate-900 mb-3">Filters</h3>

          <!-- Sort by -->
          <div class="mb-4">
            <p class="text-xs font-semibold text-slate-700 mb-2">Sort by</p>
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="sort" checked class="w-4 h-4 text-orange-500 border-orange-300 focus:ring-orange-400">
                <span>Relevance</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="sort" class="w-4 h-4 text-orange-500 border-orange-300 focus:ring-orange-400">
                <span>Fastest delivery</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="sort" class="w-4 h-4 text-orange-500 border-orange-300 focus:ring-orange-400">
                <span>Distance</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="sort" class="w-4 h-4 text-orange-500 border-orange-300 focus:ring-orange-400">
                <span>Top rated</span>
              </label>
            </div>
          </div>

          <!-- Quick filters -->
          <div class="mb-4">
            <p class="text-xs font-semibold text-slate-700 mb-2">Quick filters</p>
            <div class="flex flex-wrap gap-2">
              <button class="px-3 py-1 rounded-full border border-orange-200 bg-orange-50 text-xs text-orange-700 hover:bg-orange-100">
                Ratings 4+
              </button>
              <button class="px-3 py-1 rounded-full border border-orange-200 bg-orange-50 text-xs text-orange-700 hover:bg-orange-100 flex items-center gap-1">
                <span>🔥</span><span>Best seller</span>
              </button>
            </div>
          </div>

          <!-- Offers -->
          <div class="mb-4">
            <p class="text-xs font-semibold text-slate-700 mb-2">Offers</p>
            <div class="space-y-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-orange-300 text-orange-500 focus:ring-orange-400">
                <span>Free delivery</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-orange-300 text-orange-500 focus:ring-orange-400">
                <span>Accepts vouchers</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-orange-300 text-orange-500 focus:ring-orange-400">
                <span>Deals</span>
              </label>
            </div>
          </div>

          <!-- Cuisines filter -->
          <div class="mb-4">
            <p class="text-xs font-semibold text-slate-700 mb-2">Cuisines</p>
            <div class="flex items-center gap-2 bg-orange-50 rounded-full px-3 py-1.5 border border-orange-100">
              <span class="text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search for cuisine"
                class="flex-1 bg-transparent text-xs focus:outline-none placeholder:text-slate-400"
              />
            </div>

            <div class="mt-3 max-h-44 overflow-y-auto pr-1 space-y-2 text-sm">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-orange-300 text-orange-500 focus:ring-orange-400">
                <span>Asian</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-orange-300 text-orange-500 focus:ring-orange-400">
                <span>Bakery</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-orange-300 text-orange-500 focus:ring-orange-400">
                <span>Bangladeshi</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-orange-300 text-orange-500 focus:ring-orange-400">
                <span>Beverage</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-orange-300 text-orange-500 focus:ring-orange-400">
                <span>Biryani</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-orange-300 text-orange-500 focus:ring-orange-400">
                <span>Breakfast</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-orange-300 text-orange-500 focus:ring-orange-400">
                <span>Burgers</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-orange-300 text-orange-500 focus:ring-orange-400">
                <span>Cafe</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 rounded border-orange-300 text-orange-500 focus:ring-orange-400">
                <span>Cakes</span>
              </label>
            </div>
          </div>

          <!-- Price filter -->
          <div class="mb-1">
            <p class="text-xs font-semibold text-slate-700 mb-2">Price range</p>
            <div class="flex gap-1">
              <button class="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 text-xs hover:bg-orange-100">৳</button>
              <button class="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 text-xs hover:bg-orange-100">৳৳</button>
              <button class="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 text-xs hover:bg-orange-100">৳৳৳</button>
            </div>
          </div>
        </div>
      </aside>

      <!-- RESULTS: CUISINES + DISH CARDS -->
      <div class="lg:col-span-3 space-y-8">

        <!-- CUISINE CARDS -->
        <section>
          <div class="flex items-end justify-between mb-4">
            <div>
              <h3 class="text-xl font-semibold text-slate-900">Browse by cuisine</h3>
              <p class="text-xs text-slate-500">
                Pick your mood: classics, snacks, bowls, or desserts.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            <!-- Biryani -->
            <div class="group bg-white rounded-2xl shadow-sm overflow-hidden border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition">
              <div class="h-24">
                <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600"
                     alt="Biryani" class="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div class="p-3 text-center">
                <p class="text-sm font-semibold text-slate-900">Biryani & Pulao</p>
                <p class="text-[11px] text-slate-500">Rich, aromatic rice dishes</p>
              </div>
            </div>

            <!-- Snacks -->
            <div class="group bg-white rounded-2xl shadow-sm overflow-hidden border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition">
              <div class="h-24">
                <img src="https://images.pexels.com/photos/4109130/pexels-photo-4109130.jpeg?auto=compress&cs=tinysrgb&w=600"
                     alt="Snacks" class="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div class="p-3 text-center">
                <p class="text-sm font-semibold text-slate-900">Snacks & Street Bites</p>
                <p class="text-[11px] text-slate-500">Perfect for evening cravings</p>
              </div>
            </div>

            <!-- Comfort plates -->
            <div class="group bg-white rounded-2xl shadow-sm overflow-hidden border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition">
              <div class="h-24">
                <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
                     alt="Comfort plates" class="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div class="p-3 text-center">
                <p class="text-sm font-semibold text-slate-900">Comfort Plates</p>
                <p class="text-[11px] text-slate-500">Homestyle curry and sides</p>
              </div>
            </div>

            <!-- Bowls -->
            <div class="group bg-white rounded-2xl shadow-sm overflow-hidden border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition">
              <div class="h-24">
                <img src="https://images.pexels.com/photos/3731474/pexels-photo-3731474.jpeg?auto=compress&cs=tinysrgb&w=600"
                     alt="Bowls" class="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div class="p-3 text-center">
                <p class="text-sm font-semibold text-slate-900">Bowls & Light Meals</p>
                <p class="text-[11px] text-slate-500">Balanced and lighter options</p>
              </div>
            </div>

            <!-- Desserts -->
            <div class="group bg-white rounded-2xl shadow-sm overflow-hidden border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition">
              <div class="h-24">
                <img src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=600"
                     alt="Dessert" class="w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div class="p-3 text-center">
                <p class="text-sm font-semibold text-slate-900">Desserts</p>
                <p class="text-[11px] text-slate-500">Sweet endings to your meal</p>
              </div>
            </div>
          </div>
        </section>

        <!-- DISH CARDS -->
        <section>
          <div class="flex items-end justify-between mb-4">
            <div>
              <h3 class="text-xl font-semibold text-slate-900">Popular from Amr Kitchen</h3>
              <p class="text-xs text-slate-500">All dishes are prepared in the same cloud kitchen.</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <!-- Dish card 1 -->
            <article class="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
              <div class="md:w-40 h-36 md:h-auto">
                <img
                  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Signature set"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h4 class="font-semibold text-base text-slate-900">Signature Kacchi Set</h4>
                  <p class="text-xs text-slate-500 mb-1">
                    Biryani • Salad • Drinks • Dessert
                  </p>
                  <div class="flex flex-wrap gap-3 text-xs text-slate-700 mb-2">
                    <span>⭐ 4.9 (320+ ratings)</span>
                    <span>Recommended for 2–4 people</span>
                    <span>Delivery: 30–40 min</span>
                  </div>
                  <p class="text-xs text-slate-700">
                    Long-grain rice, tender meat, and classic sides designed for family or small group orders.
                  </p>
                </div>
                <div class="mt-3 flex items-center justify-between text-xs">
                  <span class="text-orange-600 font-semibold">৳260–৳420 per person</span>
                  <button class="px-3 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-[11px]">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>

            <!-- Dish card 2 -->
            <article class="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
              <div class="md:w-40 h-36 md:h-auto">
                <img
                  src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Snack box"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h4 class="font-semibold text-base text-slate-900">Evening Snack Box</h4>
                  <p class="text-xs text-slate-500 mb-1">
                    Burgers • Fries • Wings • Dips
                  </p>
                  <div class="flex flex-wrap gap-3 text-xs text-slate-700 mb-2">
                    <span>⭐ 4.6 (180+ ratings)</span>
                    <span>Great for friends or office teams</span>
                    <span>Delivery: 20–30 min</span>
                  </div>
                  <p class="text-xs text-slate-700">
                    A mix of crunchy and cheesy snacks, designed for sharing during games, meetings, or casual hangouts.
                  </p>
                </div>
                <div class="mt-3 flex items-center justify-between text-xs">
                  <span class="text-orange-600 font-semibold">৳180–৳350 per person</span>
                  <button class="px-3 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-[11px]">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer id="contact" class="border-t border-orange-100 bg-white">
    <div class="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-6 text-sm">
      <div>
        <h4 class="font-semibold text-slate-900 mb-2">Amr Kitchen</h4>
        <p class="text-xs text-slate-600">
          A single, central cloud kitchen serving Dhaka with carefully prepared dishes.
        </p>
      </div>
      <div>
        <h4 class="font-semibold text-slate-900 mb-2">Contact</h4>
        <p class="text-xs text-slate-600">Address: Manda, Mugda, Dhaka</p>
        <p class="text-xs text-slate-600">Phone: +880 1XXX-XXXXXX</p>
        <p class="text-xs text-slate-600">Email: hello@amrkitchen.com</p>
      </div>
      <div>
        <h4 class="font-semibold text-slate-900 mb-2">Future plans</h4>
        <p class="text-xs text-slate-600 mb-2">
          Amr Kitchen can later expand into multiple branches and partner kitchens under the same brand.
        </p>
        <button class="px-3 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold">
          Learn more
        </button>
      </div>
    </div>
    <div class="border-t border-orange-100 text-[11px] text-center py-3 text-slate-500 bg-orange-50">
      © 2025 Amr Kitchen. All rights reserved.
    </div>
  </footer>

  <!-- HERO SLIDER SCRIPT -->
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const slides = document.querySelectorAll("[data-hero-slide]");
      if (!slides.length) return;

      let current = 0;

      function showSlide(index) {
        slides.forEach((slide, i) => {
          const isActive = i === index;
          slide.classList.toggle("opacity-100", isActive);
          slide.classList.toggle("opacity-0", !isActive);
          slide.classList.toggle("pointer-events-none", !isActive);
        });
      }

      // First slide
      showSlide(current);

      // Auto change every 4 seconds
      setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
      }, 4000);
    });
  </script>

</body>
</html>

  )
}


export default page