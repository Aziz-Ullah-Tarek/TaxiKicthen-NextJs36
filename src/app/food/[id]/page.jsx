import React from 'react';
import Image from 'next/image';

// Fetching data based on the ID from the URL
const getSingleFood = async (id) => {
    try {
        const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`, {
            cache: 'no-store',
        });
        if (!res.ok) throw new Error('Failed to fetch');
        const result = await res.json();
        return result; // This contains { status, details, message }
    } catch (error) {
        console.error("Data fetching error:", error);
        return null;
    }
};

const FoodDetails = async ({ params }) => {
    // Await params in Next.js 15+
    const { id } = await params;
    const data = await getSingleFood(id);

    if (!data || !data.details) {
        return (
            <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Dish Not Found</h2>
                    <p className="text-slate-300">The recipe you are looking for does not exist.</p>
                </div>
            </div>
        );
    }

    const { title, foodImg, price, category, area, video } = data.details;

    return (
        <main className="h-screen max-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
            <div className="h-full max-h-screen flex flex-col lg:flex-row">
                
                {/* LEFT SIDE - Image Section */}
                <div className="relative lg:w-1/2 h-1/2 lg:h-full overflow-hidden group">
                    <Image 
                        src={foodImg} 
                        alt={title} 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Elegant overlay gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Floating category badge */}
                    <div className="absolute top-8 left-8 flex items-center gap-3">
                        <span className="px-5 py-2.5 bg-white/95 backdrop-blur-md text-amber-600 text-xs font-bold uppercase tracking-wide rounded-full shadow-xl border border-amber-100">
                            {category}
                        </span>
                        <span className="px-5 py-2.5 bg-black/50 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wide rounded-full">
                            {area} Cuisine
                        </span>
                    </div>

                    {/* Bottom left decorative element */}
                    <div className="absolute bottom-8 left-8 text-white">
                        <div className="flex items-center gap-2 mb-2">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                        <p className="text-xs font-medium text-white/80">Premium Quality Guaranteed</p>
                    </div>
                </div>

                {/* RIGHT SIDE - Content Section with scrollable area */}
                <div className="lg:w-1/2 h-1/2 lg:h-full overflow-y-auto">
                    <div className="p-8 lg:p-12 xl:p-16 h-full flex flex-col">
                        
                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 leading-tight mb-6">
                                {title}
                            </h1>
                            
                            {/* Price Tag - Premium Design */}
                            <div className="inline-flex items-baseline gap-3 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 px-8 py-4 rounded-2xl shadow-2xl shadow-amber-500/30 border border-amber-300">
                                <span className="text-white text-sm font-semibold uppercase tracking-wider">From</span>
                                <span className="text-white text-5xl font-black">${(price / 100).toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Premium Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <StatCard icon="⏱️" label="Prep Time" value="15 Min" gradient="from-blue-500 to-cyan-500" />
                            <StatCard icon="🔥" label="Cook Time" value="35 Min" gradient="from-orange-500 to-red-500" />
                            <StatCard icon="⚡" label="Calories" value="420 kcal" gradient="from-purple-500 to-pink-500" />
                            <StatCard icon="👨‍🍳" label="Level" value="Medium" gradient="from-green-500 to-emerald-500" />
                        </div>

                        {/* Description with elegant styling */}
                        <div className="mb-8 p-6 bg-gradient-to-br from-slate-50 to-amber-50 rounded-3xl border border-slate-200 shadow-inner">
                            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <span className="text-2xl">✨</span>
                                About This Dish
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-base">
                                Experience the rich, authentic flavors of our <span className="font-bold text-slate-900">{title}</span>. 
                                This masterpiece of {area} culinary tradition is prepared using organic ingredients and a signature 
                                blend of spices that ensures a premium dining experience in every bite. Crafted with passion and 
                                served with excellence.
                            </p>
                        </div>

                        {/* Video Preview (if available) */}
                        {video && (
                            <div className="mb-8">
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200 group cursor-pointer">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={video.replace('watch?v=', 'embed/')}
                                        title={`${title} Recipe Video`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        )}

                        {/* Action Buttons - Premium CTAs */}
                        <div className="mt-auto space-y-4">
                            <button className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-lg font-bold py-5 rounded-2xl hover:shadow-2xl hover:shadow-slate-500/50 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-3 group">
                                <span className="text-2xl group-hover:scale-110 transition-transform">🛒</span>
                                Add to Cart — ${(price / 100).toFixed(2)}
                            </button>
                            <button className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold py-5 rounded-2xl hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-3 group">
                                <span className="text-2xl group-hover:scale-110 transition-transform">❤️</span>
                                Save to Favorites
                            </button>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
                            <div className="flex items-center gap-2">
                                <span className="text-green-500 text-lg">✓</span>
                                Fresh Ingredients
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-500 text-lg">✓</span>
                                Fast Delivery
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-500 text-lg">✓</span>
                                100% Quality
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

// Premium Stat Card Component
const StatCard = ({ icon, label, value, gradient }) => (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} p-5 rounded-2xl shadow-lg group hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
        <div className="relative z-10">
            <div className="text-3xl mb-2">{icon}</div>
            <p className="text-white/90 text-xs font-semibold uppercase tracking-wide mb-1">{label}</p>
            <p className="text-white text-xl font-black">{value}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
);

// Star Icon Component
const StarIcon = () => (
    <svg className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
);

export default FoodDetails;