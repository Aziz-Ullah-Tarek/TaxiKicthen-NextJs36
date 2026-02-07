import FoodCard from '@/components/cards/FoodCard';
import React from 'react';

const getFoodData = async () => {
  try {
    const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random', {
      cache: 'no-store', 
    });

    if (!res.ok) throw new Error('Failed to fetch');

    const result = await res.json();
    // Accessing the 'foods' array from the API response
    return result.foods || []; 
  } catch (error) {
    console.error("Data fetching error:", error);
    return [];
  }
};

const FoodPage = async () => {
  const foodData = await getFoodData();

  return (
    <main className="min-h-screen bg-[#F8F9FB] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Taxi <span className="text-amber-500">Kitchen</span> Menu
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Discover our hand-picked selection of gourmet dishes. Total {foodData.length} items found.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {foodData.length > 0 ? (
            foodData.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-slate-400 text-xl font-medium">No dishes available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default FoodPage;